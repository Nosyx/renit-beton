<template>
  <div ref="galleryh" class="gallery-vue">
    <div class="nadpis">
      <h2>produkty</h2>
      <div class="underline"></div>
    </div>
    <h5 class="gallery-heading">
      V Renit beton sme presvedčení, že naše výrobky sú stvorené pre Vás a Vaše
      jedinečné potreby. Zakladáme si na individuálnom prístupe ku každému
      zákazníkovi, pretože pre nás nie ste len klientom, ste našim partnerom a
      spoločne nájdeme riešenie, ktoré naplní Vaše očakávania.
    </h5>
    <div ref="gallery" class="gallery">
      <div class="item-wrapper">
        <div class="item" @click="navigateTo('/dlazby')">
          <div
            class="image-wrapper"
            @mouseover="showMenu('dlazby')"
            @mouseleave="hideMenu('dlazby')"
          >
            <img src="../assets/dlazby.png" alt="Dlažby" />
            <transition name="fade">
              <div v-if="menuVisible === 'dlazby'" class="menu">
                <a href="/dlazby/dlazba">Dlažba</a>
                <a href="/dlazby/design-dlazba">Design dlažba</a>
              </div>
            </transition>
          </div>
          <div class="text-wrapper">
            <h3 class="vertical-text">Dlažby</h3>
          </div>
        </div>
      </div>

      <div class="item-wrapper">
        <div class="item" @click="navigateTo('/obklady')">
          <div
            class="image-wrapper"
            @mouseover="showMenu('obklady')"
            @mouseleave="hideMenu('obklady')"
          >
            <img src="../assets/obklady.png" alt="Obklady" />
            <transition name="fade">
              <div v-if="menuVisible === 'obklady'" class="menu">
                <a href="/obklady/obklad" @click.stop>Obklad</a>
                <a href="/obklady/design-obklad" @click.stop>Design obklad</a>
                <a href="/obklady/obklad/obklad-krb" @click.stop>Obklad krbu</a>
                <a href="/obklady/obklad/mozaika" @click.stop>Mozaika</a>
              </div>
            </transition>
          </div>
          <div class="text-wrapper">
            <h3 class="vertical-text">Obklady</h3>
          </div>
        </div>
      </div>

      <div class="item-wrapper">
        <div class="item" @click="navigateTo('/mikrocementove-stierky')">
          <div
            class="image-wrapper"
            @mouseover="showMenu('mikrocementove-stierky')"
            @mouseleave="hideMenu('mikrocementove-stierky')"
          >
            <img src="../assets/mikrocement.png" alt="Mikrocementové stierky" />
            <transition name="fade">
              <div v-if="menuVisible === 'mikrocementove-stierky'" class="menu">
                <a
                  href="/mikrocementove-stierky/mikrocementova-fasada"
                  @click.stop
                  >Mikrocementová fasáda</a
                >
                <a
                  href="/mikrocementove-stierky/mikrocementova-podlaha"
                  @click.stop
                  >Mikrocementová podlaha</a
                >
                <a
                  href="/mikrocementove-stierky/mikrocementova-stena"
                  @click.stop
                  >Mikrocementová stena</a
                >
                <a
                  href="/mikrocementove-stierky/mikrocementovy-nabytok"
                  @click.stop
                  >Mikrocementový nábytok</a
                >
              </div>
            </transition>
          </div>
          <div class="text-wrapper">
            <h3 class="vertical-text">Mikrocementové stierky</h3>
          </div>
        </div>
      </div>

      <div class="item-wrapper">
        <div class="item" @click="navigateTo('/betonove-stierky')">
          <div
            class="image-wrapper"
            @mouseover="showMenu('betonoveStierky')"
            @mouseleave="hideMenu('betonoveStierky')"
          >
            <img
              src="../assets/beton-stierka-titulka.jpg"
              alt="Betónové stierky"
            />
            <transition name="fade">
              <div v-if="menuVisible === 'betonoveStierky'" class="menu">
                <a href="/betonove-stierky/dekoracna-stierka" @click.stop
                  >Dekoračná stierka</a
                >
                <a href="/betonove-stierky/graficka-stierka" @click.stop
                  >Grafická stierka</a
                >
                <a href="/betonove-stierky/stierka-krb" @click.stop
                  >Stierka krb</a
                >
                <a href="/betonove-stierky/beton-kozmetik" @click.stop
                  >Betón kozmetik</a
                >
              </div>
            </transition>
          </div>
          <div class="text-wrapper">
            <h3 class="vertical-text">Betónové stierky</h3>
          </div>
        </div>
      </div>

      <div class="item-wrapper">
        <div class="item" @click="navigateTo('/kvetinace')">
          <div
            class="image-wrapper"
            @mouseover="showMenu('kvetinaceZahony')"
            @mouseleave="hideMenu('kvetinaceZahony')"
          >
            <img src="../assets/kvetinace-zahony.png" alt="Kvetináče záhony" />
            <transition name="fade">
              <div v-if="menuVisible === 'kvetinaceZahony'" class="menu">
                <a href="/kvetinace/kvetinacova-stena">Kvetináčová stena</a>
                <a href="/kvetinace/kvetinace-skladane">Kvetináče skladané</a>
                <a href="/kvetinace/kvetinace-monoliticke"
                  >Kvetináče monolitické</a
                >
                <a href="/kvetinace/vyvysene-zahony">Vyvýšené záhony</a>
              </div>
            </transition>
          </div>
          <div class="text-wrapper">
            <h3 class="vertical-text">Kvetináče/ Vyvýšené záhony</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
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
    navigateTo(route) {
      this.$router.push(route);
    },
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

.gallery-heading {
  text-align: left;
  margin-bottom: 20px;
  padding-bottom: 30px;
  padding-left: 4%;
  font-size: 1rem;
  font-weight: 300;
  color: #333;
  max-width: 90%;
  align-self: flex-start;
  -webkit-animation: slide-in-top 1s ease-in-out both;
  animation: slide-in-top 1s ease-in-out both;
}

@media (max-width: 768px) {
  .gallery-heading {
    margin: 0;
    align-self: center;
    max-width: 90%;
    padding-left: 0;
    font-size: 0.8rem;
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

  .gallery-heading {
    padding-top: 30px;
  }
}
</style>
