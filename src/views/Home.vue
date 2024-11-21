<template>
  <div class="home" id="fullpage">
    <div class="section">
      <section class="hero">
        <video
          src="/src/assets/FHD-V4.mp4"
          autoplay
          muted
          playsinline
          loop
          class="background-video"
          alt=""
        ></video>
        <div class="hero-text">
          <p class="welcome-text animate-fadeIn delay-0">
            vitajte v / welcome to
          </p>
          <h1 class="animate-fadeIn delay-1">renit beton</h1>
          <p class="hero-description animate-fadeIn delay-2">
            Spolu posúvame hranice betónu od roku 2001.
          </p>
        </div>
      </section>
    </div>
    <div class="section" id="o-nas">
      <section class="info-section">
        <div class="info-container">
          <div class="info-image animate-fadeInRight delay-0">
            <img
              src="../assets/e674e399a7805c3ab938b5e1764f5555.png"
              alt="Renit Beton Image"
            />
          </div>
          <h1 class="vertical-text animate-fadeInLeft delay-1">renit beton</h1>
          <div class="info-content animate-fadeInUp delay-2">
            <h2>renit beton</h2>
            <div class="underline"></div>
            <p>{{ text.oNasText }}</p>
          </div>
        </div>
      </section>
    </div>
    <div class="section" id="produkty">
      <section class="products">
        <Gallery />
      </section>
    </div>
    <div class="section">
      <section>
        <Gallery2 />
      </section>
    </div>
    <div class="section">
      <section class="showroom">
        <div class="info-container">
          <div class="info-image animate-fadeInRight delay-0">
            <img src="../assets/showroom.jpeg" alt="Showroom Image" />
          </div>
          <h1 class="vertical-text animate-fadeInLeft delay-1">showroom</h1>
          <div class="info-content animate-fadeInUp delay-2">
            <h2>showroom</h2>
            <div class="underline"></div>
            <p>{{ text.showroomText }}</p>
          </div>
        </div>
      </section>
    </div>
    <div class="section">
      <section class="documents">
        <Documents />
      </section>
    </div>
    <div class="section">
      <section class="blog">
        <BlogVideo />
      </section>
    </div>
    <div class="section" id="referencie">
      <section class="map-foot">
        <FullWidthSlider />
        <Footer />
      </section>
    </div>
  </div>
</template>

<script>
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";
import Gallery from "../components/Gallery.vue";
import Gallery2 from "../components/Gallery2.vue";
import Documents from "../components/Documents.vue";
import BlogVideo from "../components/BlogVideo.vue";
import Footer from "../components/Footer.vue";
import FullWidthSlider from "../components/FullWidthSlider.vue";

export default {
  name: "Home",
  components: {
    Gallery,
    Gallery2,
    Documents,
    BlogVideo,
    Footer,
    FullWidthSlider,
  },
  data() {
    return {
      isDesktop: window.innerWidth > 1024,
      text: {
        oNasText:
          "Vítame vás vo svete Renit beton, kde tvoríme krásu a trvanlivosť pomocou pohľadového betónu. Už od roku 2001 sa venujeme tvorbe unikátnych produktov, ktoré spájajú krásu a praktickosť, aby obohatili Váš životný priestor. Rozhodli sme sa spojiť krásu s odolnosťou, a preto sa zameriavame na výrobu produktov, ktoré vydržia dlhé roky a zároveň očaria svojou jedinečnou estetikou. Našim cieľom je harmonické prepojenie chladného betónu s teplom a pohodlím Vášho domova.",
        showroomText:
          "Radi vás privítame v našom showroome, kde vám predstavíme našu širokú ponuku produktov. Náš tím odborníkov je pripravený spolupracovať s Vami od výberu až po inštaláciu. Pri našej práci sa riadime hodnotami kvality, inovácie a spoľahlivosti. Každý kus našich produktov je vyrobený s láskou k detailom a starostlivosťou o každý proces. Snažíme sa neustále inovovať, aby sme Vám mohli ponúknuť to najlepšie, čo svet pohľadového betónu má. Tešíme sa, že môžeme byť súčasťou Vašich projektov a pomôcť Vám dosiahnuť Vaše vízie.",
      },
    };
  },
  mounted() {
    this.initFullPage();
    this.preventBodyScroll();
    this.initScrollAnimations();
  },
  unmounted() {
    if (this.$fullpage) {
      this.$fullpage.destroy("all");
    }
    this.allowBodyScroll();
  },
  methods: {
    initFullPage() {
      if (this.$fullpage) {
        this.$fullpage.destroy("all");
      }
      if (this.isDesktop) {
        this.$nextTick(() => {
          this.$fullpage = new fullpage("#fullpage", {
            navigation: true,
            scrollOverflow: true,
            afterLoad: (origin, destination) => {
              this.updateHeader(destination.index);
            },
          });
        });
      }
    },
    preventBodyScroll() {
      document.body.style.overflow = "hidden";
    },
    allowBodyScroll() {
      document.body.style.overflow = "";
    },
    initScrollAnimations() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      document
        .querySelectorAll(
          ".animate-fadeIn, .animate-fadeInRight, .animate-fadeInLeft, .animate-fadeInUp"
        )
        .forEach((element) => {
          observer.observe(element);
        });
    },
    updateHeader(index) {
      const header = document.querySelector("header");
      if (index > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    },
  },
};
</script>

<style scoped>
.floating-box {
  display: none !important;
}

.nadpis {
  max-width: 80%;
  margin-left: 4%;
}

.nadpis h2 {
  font-size: 2.2rem;
  font-weight: 600 !important;
}

.delay-0 {
  animation-delay: 0s;
}

.delay-1 {
  animation-delay: 0.5s;
}

.delay-2 {
  animation-delay: 1s;
}

.delay-3 {
  animation-delay: 1.5s;
}
/* Popup Styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.popup h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.popup p {
  margin-bottom: 20px;
  font-size: 1rem;
}

.popup button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.popup button:hover {
  background-color: #0056b3;
}

#footer {
  justify-content: end;
}

.fp-section {
  background-color: #fafafa !important;
}

section {
  background-color: #fafafa !important;
}

.home {
  font-family: "Arial", sans-serif;
}

.hero {
  top: 0;
  background: none;
  position: relative;
  height: 78.6vh;
  padding: 100px 20px;
  color: #000;
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  align-content: left;
  justify-content: left;
}

@media (max-width: 1199px) {
  .info-image img {
    width: inherit;
    height: inherit;
  }
}

.hero-text h1 {
  font-size: 6rem !important;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5; /* Jemná opacita pre video */
  z-index: 0;
}

@media (max-width: 768px) {
  .hero {
    background-size: 170vh;
    height: 85vh;
  }

  .hero-text {
    margin: 0 !important;
  }

  .welcome-text {
    font-size: 1rem !important;
  }

  .hero-text h1 {
    font-size: 2.5rem !important;
  }

  .hero-description {
    font-size: 1.25rem !important;
  }

  .info-section {
    padding-top: 100px !important;
    max-height: 33%;
    max-width: 100% !important;
  }

  .info-container {
    flex-direction: column;
    max-width: 100% !important;
  }

  .vertical-text {
    display: none;
  }

  .info-image img {
    height: 35vh;
    width: 60vw !important;
    padding-bottom: 20px;
  }

  .info-content p {
    font-size: 0.8rem !important;
  }

  .showroom img {
    height: 35vh !important;
    width: 80vw !important;
  }

  .showroom {
    padding-top: 100px !important;
  }

  .info-content {
    padding-left: 0px !important;
  }
}

.hero-text {
  position: relative;
  z-index: 1;
  max-width: 80vw;
  margin-left: 7vw;
  margin-top: 20vh;
  color: #000;
}

.welcome-text {
  font-size: 2rem;
  margin-bottom: 10px;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 1.75rem;
}

.info-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: #fafafa;
  max-width: 100% !important;
}

.info-container {
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: center;
}

.info-container h1 {
  text-orientation: upright;
  transform: rotate(270deg);
  font-size: 80px;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.05);
  max-width: 10%;
  align-self: end;
}

@media (max-width: 1200px) {
  .info-container h1 {
    display: none;
  }
}

.info-image img {
  width: 21vw;
  height: inherit;
}

.info-content {
  padding-left: 50px;
}

.info-content h2 {
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: 10px;
  animation: slide-left 0.5s ease forwards;
}

@keyframes slide-left {
  0% {
    transform: translateX(300vw);
  }
  100% {
    transform: translateX(0vw);
  }
}

.underline {
  width: 50px;
  height: 3px;
  background-color: #000;
  margin-bottom: 20px;
}

.info-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify !important;
}

.showroom {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: #fff;
}

.showroom img {
  height: 55vh;
  width: 30vw;
  margin-left: -2vw;
}

.vertical-text {
  align-self: center;
}

.documents {
  background-color: #fafafa;
}

@media (min-width: 1200px) {
  .map-foot {
    padding-top: 30px;
    margin: 0;
  }
}

@media ((min-width: 980px) and (max-width: 1024px)) {
  .hero {
    background-size: 150vh;
    height: 50vh;
  }

  .info-section {
    padding-top: 80px !important;
  }

  .info-section .vertical-text {
    font-size: 4rem;
    display: none;
  }

  .info-content {
    margin-left: -120px;
  }

  .info-image img {
    height: inherit !important;
    width: 35vw !important;
    padding-bottom: 20px;
  }
}

@media ((min-width: 1350px) and (max-width: 1366px)) {
  .info-section {
    padding-top: 80px !important;
  }

  .info-section .vertical-text {
    font-size: 4rem;
  }

  .info-content {
    margin-left: -120px;
  }

  .info-image img {
    height: inherit !important;
    width: 25vw !important;
    padding-bottom: 20px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .hero {
    background-size: 140vw;
    height: 65vh;
    padding: 80px 20px;
  }

  .hero-text {
    margin-left: 20vw;
    margin-top: 15vh;
    max-width: 90vw;
  }

  .hero-text h1 {
    font-size: 2.8rem;
  }

  .underline {
    align-self: center;
  }

  .hero-description {
    font-size: 1.5rem;
  }

  .info-section {
    padding: 40px 20px;
  }

  .info-container {
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    text-align: center;
  }

  .vertical-text {
    font-size: 3rem;
    transform: rotate(0deg);
    margin: 0;
    text-orientation: unset;
    writing-mode: unset;
    display: none;
  }

  .info-image img {
    width: 60%;
    height: inherit;
    margin-bottom: 20px;
  }

  .info-content {
    padding: 0;
    margin: 0;
  }

  .info-content h2 {
    font-size: 2rem;
  }

  .showroom {
    padding: 40px 20px;
  }

  .showroom img {
    width: 70%;
    height: auto;
    margin-bottom: 20px;
  }
}

@media (min-width: 1024px) and (max-width: 1366px) {
  .hero-text {
    margin-left: 22vw;
    margin-top: 20vh;
  }

  .hero-text h1 {
    font-size: 3.5rem;
  }

  .hero-description {
    font-size: 1.75rem;
  }

  .info-section {
    padding: 50px 20px;
  }

  .info-container {
    flex-direction: row;
    max-width: 85%;
    text-align: left;
  }

  .vertical-text {
    font-size: 4rem;
    margin-left: -6vw;
    transform: rotate(270deg);
    text-orientation: upright;
  }

  .info-content {
    padding-left: 40px;
  }

  .info-content h2 {
    font-size: 2.2rem;
  }

  .showroom {
    padding: 50px 20px;
  }

  .nadpis {
    margin-left: 50px;
  }
}

/* Animácie */
.animate-fadeIn {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-fadeInRight {
  opacity: 0;
  transform: translateX(100px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-fadeInLeft {
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-fadeInUp {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.visible {
  opacity: 1;
  transform: translateX(0) translateY(0);
}
</style>
