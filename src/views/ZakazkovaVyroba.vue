<template>
  <!-- Hero sekcia pod breadcrumbs -->
  <section class="hero-section"></section>

  <!-- Breadcrumbs sekcia -->
  <nav class="breadcrumbs">
    <div class="container">
      <ul>
        <li><a href="/">Úvod</a></li>
        <li><span>></span></li>
        <li>
          <a href="/zakazkova-vyroba">Zákazková výroba</a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Hlavná sekcia s obkladmi -->
  <section class="info-section">
    <div class="info-container">
      <div class="info-image">
        <img src="../assets/ZakazkovaTitulka.jpg" alt="Renit Beton Image" />
      </div>
      <h1 class="vertical-text">renit beton</h1>
      <div class="info-content">
        <h2>Zákazková výroba</h2>
        <div class="underline"></div>
        <p>{{ text.mainDescription }}</p>
      </div>
    </div>
  </section>

  <div class="zakazkova-vyroba" id="referencie">
    <h1>GALÉRIA</h1>

    <div class="gallery-grid">
      <div
        v-for="(photo, index) in visiblePhotos"
        :key="index"
        class="gallery-item"
        @click="openLightbox(index)"
      >
        <img :src="photo" alt="Zakazkova výroba" />
      </div>
    </div>

    <vue-easy-lightbox
      :visible="lightboxVisible"
      :imgs="photos"
      :index="lightboxIndex"
      @hide="lightboxVisible = false"
    />

    <button @click="loadMore" class="load-more">Zobraziť viac</button>

    <h2 class="nadpis-form">Kontaktujte nás</h2>
    <form
      @submit.prevent="submitForm"
      action="https://formsubmit.co/renit@renit.sk"
      method="POST"
      class="contact-form"
    >
      <input type="text" name="name" placeholder="Meno" required />
      <input type="text" name="surname" placeholder="Priezvisko" required />
      <input type="tel" name="phone" placeholder="Telefónne číslo" required />
      <input type="email" name="email" placeholder="Emailová adresa" required />
      <textarea
        name="message"
        rows="5"
        placeholder="Vaša správa"
        required
      ></textarea>
      <button type="submit">Odoslať</button>
    </form>
  </div>
  <Footer />
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
import Footer from "../components/Footer.vue";

export default {
  name: "ZakazkovaVyroba",
  components: {
    VueEasyLightbox,
    Footer,
  },
  data() {
    return {
      photos: [
        "/src/assets/Slider1.jpg",
        "/src/assets/Slider2.jpg",
        "/src/assets/Galeria1.jpg",
        "/src/assets/Galeria2.jpg",
        "/src/assets/Galeria3.jpg",
        "/src/assets/Galeria4.jpg",
        "/src/assets/Galeria5.jpg",
        "/src/assets/Galeria6.jpg",
        "/src/assets/Galeria7.jpg",
        "/src/assets/Galeria8.jpg",
        "/src/assets/Galeria9.jpg",
        "/src/assets/Galeria10.jpg",
        "/src/assets/Galeria11.jpg",
        "/src/assets/Galeria12.jpg",
        // Pridajte viac fotiek...
      ],
      visiblePhotos: [],
      lightboxVisible: false,
      lightboxIndex: 0,
      text: {
        mainDescription:
          "Ak ste u nás doteraz nenašli presne to, čo ste hľadali alebo máte konkrétnu predstavu o vysnívanom produkte, tak presne pre vás je určená naša zákazková výroba. Stačí ak nás kontaktujete a spoločne sa pokúsime premeniť váš sen na realitu. S betónovými produktami na mieru dodáme vášmu prostrediu unikátny nádych, či už ide o špecifický dizajn, veľkosť alebo funkčnosť. Nechajte nás byť súčasťou vašich projektov a spolu vytvoríme niečo výnimočné. Spojíme vašu predstavu s našimi zručnosťami a vytvoríme prvok, ktorý vyhovuje presne vašim očakávaniam.",
      },
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      const nextPhotos = this.photos.slice(
        this.visiblePhotos.length,
        this.visiblePhotos.length + 12
      );
      this.visiblePhotos = [...this.visiblePhotos, ...nextPhotos];
    },
    openLightbox(index) {
      this.lightboxIndex = index;
      this.lightboxVisible = true;
    },
    submitForm() {
      alert("Formulár bol úspešne odoslaný!");
    },
  },
};
</script>

<style scoped>
/* Breadcrumbs */
.breadcrumbs {
  background-color: #f8f8f8;
  padding: 20px 0;
  font-size: 16px;
  text-align: left;
}

.breadcrumbs ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.breadcrumbs li {
  font-size: 14px;
}

.breadcrumbs a {
  color: #333;
  text-decoration: none;
  padding: 0 5px;
}

.breadcrumbs span {
  padding: 0 5px;
}

/* Hero sekcia */
.hero-section {
  width: 100%;
  height: 15vh !important;
  background-image: url(/src/assets/langing-bg.jpeg);
  background-size: cover;
  background-position: center top;
}

/* Main Heading */
.main-heading {
  text-align: center;
  padding: 20px;
  font-size: 1rem;
  max-width: 1000px;
  margin: 0 auto 50px auto;
  font-weight: 300;
}

/* Main content */
.info-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 20px;
  background-color: #fafafa;
  padding-bottom: 250px;
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
  margin-left: -8vw;
  font-size: 80px;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.05);
  margin-top: 18%;
}

.info-image img {
  width: 28vw;
  height: 65vh;
}

.info-content {
  padding-left: 50px;
}

.info-content h2 {
  font-size: 2.2rem;
  font-weight: bold;
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

/* Pridajte potrebné štýly pre galériu a formulár */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 50px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.gallery-item img:hover {
  transform: scale(1.05);
}

.load-more {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}

.nadpis-form {
  font-size: 3rem;
  text-align: center;
}

.contact-form {
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-form input,
.contact-form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact-form button {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 stĺpce na menších obrazovkách */
  }

  .info-image img {
    width: 100%;
  }

  .info-container {
    display: grid;
  }

  .info-container h1 {
    display: none;
  }

  .info-content {
    padding-left: 0px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr; /* 1 stĺpec na veľmi malých obrazovkách */
  }
}

.zakazkova-vyroba h1 {
  font-size: 4rem;
  text-align: center;
}
</style>
