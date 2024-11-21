<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="logo">
      <a href="https://www.renit.sk">
        <img src="/src/assets/logo-renit.png" alt="Logo" />
      </a>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="fullscreen-menu" :class="{ open: menuOpen }">
      <div class="menu-content">
        <div class="close" @click="closeMenu">✖</div>
        <nav>
          <ul id="menu">
            <li>
              <a :href="getLink('hero')" @click.prevent="navigate(1, 'hero')"
                >Domov</a
              >
            </li>
            <li>
              <a :href="getLink('o-nas')" @click.prevent="navigate(2, 'o-nas')"
                >O nás</a
              >
            </li>
            <li>
              <a
                :href="getLink('produkty')"
                @click.prevent="navigate(3, 'produkty')"
                >Produkty</a
              >
            </li>
            <li>
              <a
                :href="getLink('referencie')"
                @click.prevent="navigate(8, 'referencie')"
                >Referencie</a
              >
            </li>
            <li>
              <a
                :href="getLink('kontakty')"
                @click.prevent="navigate(8, 'kontakty')"
                >Kontakty</a
              >
            </li>
            <li class="search-icon" @click="toggleSearch">
              <svg
                fill="#000000"
                height="50px"
                width="50px"
                version="1.1"
                viewBox="0 0 451 451"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3 s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4 C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3 s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"
                ></path>
              </svg>
            </li>
          </ul>
        </nav>
        <div v-if="searchOpen" class="search-bar">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Vyhľadať produkt.."
          />
          <ul v-if="searchResults.length" class="search-results">
            <li v-for="result in searchResults" :key="result.path">
              <a :href="result.path">{{ result.meta.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      isScrolled: false,
      searchOpen: false,
      searchQuery: "",
      searchResults: [],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.updateBodyOverflow();
    },
    closeMenu() {
      this.menuOpen = false;
      this.updateBodyOverflow();
    },
    toggleSearch() {
      this.searchOpen = !this.searchOpen;
      if (!this.searchOpen) this.searchQuery = "";
    },
    navigate(index, sectionId) {
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/", hash: `#${sectionId}` }).then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              if (typeof fullpage_api !== "undefined") {
                fullpage_api.moveTo(index);
              } else {
                const target = document.getElementById(sectionId);
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }
            }, 500);
          });
        });
      } else {
        if (typeof fullpage_api !== "undefined") {
          fullpage_api.moveTo(index);
        } else {
          const target = document.getElementById(sectionId);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }
      }
      this.closeMenu();
    },
    getLink(sectionId) {
      return this.$route.path === "/" ? `#${sectionId}` : `/#${sectionId}`;
    },
    updateBodyOverflow() {
      if (this.$route.path === "/") {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = this.menuOpen ? "hidden" : "auto";
      }
    },
    checkScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    isDesktop() {
      return window.innerWidth > 1024;
    },
    searchRoutes() {
      this.searchResults = this.$router.options.routes
        .filter((route) => route.meta && route.meta.title)
        .filter((route) =>
          route.meta.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
    },
  },
  watch: {
    searchQuery() {
      this.searchRoutes();
    },
    $route(to) {
      this.updateBodyOverflow();
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkScroll);
    this.updateBodyOverflow();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkScroll);
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 71%;
  align-items: center;
  padding: 30px 20px;
  background: transparent;
  transition: background 0.3s, padding 0.3s;
  z-index: 1000;
}

header.scrolled {
  padding: 15px 10px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
}

.logo img {
  height: 100px;
  transition: height 0.3s;
}

header.scrolled .logo img {
  height: 70px;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;
}

header.scrolled .hamburger {
  width: 20px;
  height: 16px;
}

.hamburger div {
  height: 3px;
  background: black;
}

.fullscreen-menu {
  position: fixed;
  top: 0;
  left: 100vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(217, 217, 217, 0.9);
  z-index: 1001;
  transition: left 0.9s ease-in-out;
}

.fullscreen-menu.open {
  left: 0;
}

.menu-content {
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: 50px;
}

.menu-content .close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
}

.menu-content nav ul {
  list-style: none;
  padding: 0;
}

.menu-content nav ul li {
  margin: 20px 0;
}

.menu-content nav ul li a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 40px;
  font-weight: 600;
}

.menu-content .search-icon {
  cursor: pointer;
}

.search-bar {
  margin-top: 20px;
}

.search-bar input {
  padding: 10px;
  font-size: 16px;
  width: 200px;
}

.search-results {
  list-style: none;
  padding: 0;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 200px;
  position: absolute;
}

.search-results li {
  padding: 5px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}

.search-results li a {
  text-decoration: none;
  color: #000;
}

.search-results li:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  header {
    gap: 40%;
  }

  .hamburger {
    margin-right: 20px;
  }
}

@media ((min-width: 1023px) and (max-width: 1441px)) {
  .breadcrumbs {
    margin-top: 20px !important;
  }
}
</style>
