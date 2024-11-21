<template>
  <div ref="galleryh" class="gallery-vue">
    <div class="nadpis">
      <h2>produkty</h2>
      <div class="underline"></div>
    </div>
    <div ref="gallery" class="gallery">
      <div class="item-wrapper">
        <div class="item" @click="navigateTo('/nabytok')">
          <div
            class="image-wrapper"
            @mouseover="showMenu('kuchynskeDosky')"
            @mouseleave="hideMenu('kuchynskeDosky')"
          >
            <img
              src="../assets/nabytok-titulka.jpg"
              alt="Kuchynské dosky/ Nábytok"
            />
            <transition name="fade">
              <div v-if="menuVisible === 'kuchynskeDosky'" class="menu">
                <a href="/nabytok/kuchynske-dosky-monoliticke"
                  >Kuchynské dosky monolitické</a
                >
                <a href="/nabytok/kuchynske-dosky-stierka"
                  >Kuchynské dosky stierka</a
                >
                <a href="/nabytok/nabytok-monoliticky">Nábytok monolitický</a>
                <a href="/nabytok/nabytok-stierka">Nábytok stierka</a>
              </div>
            </transition>
          </div>
          <div class="text-wrapper">
            <h3 class="vertical-text">Kuchynské dosky/ Nábytok</h3>
          </div>
        </div>
      </div>

      <div class="item-wrapper">
        <div class="item" @click="navigateTo('/schody-ploty-capice-parapety')">
          <div
            class="image-wrapper"
            @mouseover="showMenu('schody')"
            @mouseleave="hideMenu('schody')"
          >
            <img
              src="../assets/schodylanding.png"
              alt="Schody/Ploty/Čapice/Parapety"
            />
            <transition name="fade">
              <div v-if="menuVisible === 'schody'" class="menu">
                <a href="/schody-ploty-capice-parapety/schody">Schody</a>
                <a href="/schody-ploty-capice-parapety/ploty">Ploty</a>
                <a href="/schody-ploty-capice-parapety/plotove-capice"
                  >Čapice</a
                >
                <a href="/schody-ploty-capice-parapety/parapety">Parapety</a>
              </div>
            </transition>
          </div>
          <div class="text-wrapper">
            <h3 class="vertical-text">Schody/ Ploty/ Čapice/ Parapety</h3>
          </div>
        </div>
      </div>

      <div class="item-wrapper">
        <div class="item" @click="navigateTo('/lavicky-sedenie')">
          <div
            class="image-wrapper"
            @mouseover="showMenu('lavicky')"
            @mouseleave="hideMenu('lavicky')"
          >
            <img src="../assets/lavicky.png" alt="Lavičky/Sedenie" />
            <transition name="fade">
              <div v-if="menuVisible === 'lavicky'" class="menu">
                <a href="/lavicky-beton">Betón</a>
                <a href="/lavicky-drevo">Drevo</a>
                <a href="/lavicky-kov">Kov</a>
                <a href="/lavicky-zostavy">Zostavy</a>
              </div>
            </transition>
          </div>
          <div class="text-wrapper">
            <h3 class="vertical-text">Lavičky/ Sedenie</h3>
          </div>
        </div>
      </div>

      <div class="item-wrapper">
        <div class="item" @click="navigateTo('/dekoracie')">
          <div
            class="image-wrapper"
            @mouseover="showMenu('dekoracie')"
            @mouseleave="hideMenu('dekoracie')"
          >
            <img src="../assets/dekoracie.png" alt="Dekorácie" />
            <transition name="fade">
              <div v-if="menuVisible === 'dekoracie'" class="menu">
                <a href="/dekoracie">Dekorácie</a>
              </div>
            </transition>
          </div>
          <div class="text-wrapper">
            <h3 class="vertical-text">Dekorácie</h3>
          </div>
        </div>
      </div>

      <div class="item-wrapper">
        <div class="item" @click="navigateTo('/zakazkova-vyroba')">
          <div class="item">
            <div
              class="image-wrapper"
              @mouseover="showMenu('zakazkovaVyroba')"
              @mouseleave="hideMenu('zakazkovaVyroba')"
            >
              <img
                src="../assets/zakazkova-vyroba.png"
                alt="Zákazková výroba"
              />
              <transition name="fade">
                <div v-if="menuVisible === 'zakazkovaVyroba'" class="menu">
                  <a href="/zakazkova-vyroba">Zákazková výroba</a>
                </div>
              </transition>
            </div>
            <div class="text-wrapper">
              <h3 class="vertical-text">Zákazková výroba</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery2",
  data() {
    return {
      menuVisible: null,
    };
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(this.$refs.gallery);
  },
  methods: {
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.$refs.gallery
            .querySelectorAll(".item")
            .forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate");
              }, index * 150);
            });
        }
      });
    },
    showMenu(menu) {
      this.menuVisible = menu;
    },
    hideMenu(menu) {
      if (this.menuVisible === menu) {
        this.menuVisible = null;
      }
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.gallery-vue {
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  font-family: Arial, Helvetica, sans-serif;
}

.nadpis {
  max-width: 80%;
  margin-left: 4%;
}

.nadpis h2 {
  font-size: 2.2rem;
  font-weight: 400 !important;
}

@media (max-width: 1000px) {
  .nadpis {
    align-self: center;
    margin: 0;
  }
}

@media (max-width: 1199px) {
  .nadpis h2 {
    display: none;
  }

  .underline {
    display: none;
  }
  .gallery {
    margin-top: -120px;
  }
}

.gallery-heading {
  text-align: left;
  margin-bottom: 20px;
  padding-bottom: 30px;
  padding-left: 8.2vw;
  font-size: 1rem;
  color: #333;
  max-width: 50%;
  align-self: flex-start;
  -webkit-animation: slide-in-top 1s ease-in-out both;
  animation: slide-in-top 1s ease-in-out both;
}

@media (max-width: 768px) {
  .gallery-heading {
    font-size: 1rem;
    margin: 0;
    text-align: center;
    align-self: center;
    max-width: 90%;
    padding-left: 0;
  }

  .gallery-vue {
    padding-top: 100px;
  }

  .gallery {
    grid-template-columns: 1fr;
  }
}

.gallery {
  display: grid;
  grid-template-columns: repeat(5, 18vw);
  grid-template-rows: repeat(2, auto);
  row-gap: 40px;
  column-gap: 15px;
  justify-content: center;
  padding-left: 20px;
  padding-top: 60px;
}

.underline {
  width: 50px;
  height: 3px;
  background-color: #000;
  margin-bottom: 20px;
}

.item {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end; /* Align items to the bottom */
  opacity: 0;
  transform: translateY(-20px);
  max-height: 100%;
}

.item.animate {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s, transform 0.5s;
}

.item a {
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  align-items: center !important;
  align-self: center !important;
  align-content: center;
}

.item a:hover {
  color: rgb(194, 154, 154);
}

.text-wrapper {
  margin-left: -10px;
  display: flex;
  align-items: end;
  justify-content: center;
  height: 100%;
  margin-bottom: 5px;
}

.vertical-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: #000;
  white-space: nowrap;
  font-size: 1.1rem;
  font-weight: bold;
}

.image-wrapper {
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.image-wrapper img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}

.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  flex-direction: column;
  gap: 10px;
  z-index: 10;
}

.menu a {
  padding-top: 20px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  text-align: center !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  /* .fade-leave-active below version 2.1.8 */
  opacity: 0;
}

@media (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: 1fr;
    padding-left: 70px;
  }

  .image-wrapper {
    max-width: 80%;
  }

  .underline {
    margin: 0 auto;
  }

  .gallery-heading {
    padding-top: 30px;
  }
}
</style>
