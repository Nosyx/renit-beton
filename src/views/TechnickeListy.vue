<template>
    <div>
      <!-- Hero sekcia pod breadcrumbs -->
      <section class="hero-section"></section>
  
      <!-- Breadcrumbs sekcia -->
      <nav class="breadcrumbs">
        <div class="container">
          <ul>
            <li><a href="/">Úvod</a></li>
            <li><span>></span></li>
            <li><a href="/technicke-listy">Technické listy</a></li>
          </ul>
        </div>
      </nav>
  
      <!-- Hlavná sekcia s obkladmi -->
      <section class="info-section">
        <div class="info-container">
          <div class="info-image">
            <img src="../assets/technickelisty.png" alt="Renit Beton Image" />
          </div>
          <h1 class="vertical-text">renit beton</h1>
          <div class="info-content">
            <h2>Technické listy</h2>
            <div class="underline"></div>
            <p>{{ text.mainDescription }}</p>
          </div>
        </div>
      </section>
  
      <Listy />

      <!-- PDF Lightbox -->
      <div v-if="pdfVisible" class="lightbox" @click="closePdf">
        <div class="lightbox-content" @click.stop>
          <iframe :src="pdfSrc" width="100%" height="100%"></iframe>
          <button class="close-button" @click="closePdf">✖</button>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script>
  import Footer from "../components/Footer.vue";
  import Listy from "../components/Listy.vue";

  export default {
    name: "TechnickeListy",
    components: {
      Footer,
      Listy,
    },
    data() {
      return {
        text: {
          mainDescription:
            "Technické listy poskytujú podrobné informácie o vlastnostiach, špecifikáciách a použití produktov, čo je kľúčové pre správny výber a aplikáciu. Tieto dokumenty zaisťujú, že používatelia majú prístup k najnovším technickým údajom a bezpečnostným pokynom, čím podporujú efektívnosť a bezpečnosť v praxi.",
          itemsHeading:
            "V Renit beton sme presvedčení, že naše výrobky sú stvorené pre Vás a Vaše jedinečné potreby. Zakladáme si na individuálnom prístupe ku každému zákazníkovi, pretože pre nás nie ste len klientom, ste naším partnerom a spoločne nájdeme riešenie, ktoré naplní Vaše očakávania.",
          formatyText:
            "Zoznam formátov obkladov zahŕňa rôzne veľkosti a tvary, vrátane štvorcov, obdĺžnikov a mozaikových vzorov. Tieto formáty umožňujú prispôsobiť dizajn každému priestoru, čím zvyšujú estetickú hodnotu a funkčnosť obkladov.",
        },
      };
    },
    methods: {
      handleButtonClick() {
        // Skontrolujeme šírku obrazovky
        if (window.innerWidth < 1000) {
          // Ak je šírka menšia ako 1000px, stiahneme PDF
          const link = document.createElement("a");
          link.href = this.pdfSrc;
          link.download = "zoznam-formatov-obkladov.pdf"; // nastavte názov súboru
          link.click();
        } else {
          // Inak otvoríme PDF v lightboxe
          this.pdfVisible = true;
        }
      },
      closePdf() {
        this.pdfVisible = false;
      },
    },
    mounted() {
      if (this.$root.$options.isFullPageEnabled && this.$fullpage) {
        this.$fullpage.destroy("all");
        this.$root.$options.isFullPageEnabled = false;
      }
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
    background-image: url(src/assets/langing-bg.jpeg);
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
  }
  
  .info-image img {
    width: 28vw;
    min-height: 50vh;
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
  
  /* Items sekcia */
  .section-container {
    display: flex;
    align-items: flex-start;
    margin-top: 50px;
    justify-content: center;
    margin-left: -60px;
  }
  
  /* Vertikálny text na ľavej strane */
  .vertical-text-section {
    margin-right: 20px;
    align-self: center;
    flex-shrink: 0;
  }
  
  .vertical-text-section h1 {
    writing-mode: vertical-rl;
    rotate: 180deg;
    font-size: 80px;
    color: rgba(0, 0, 0, 0.05);
    margin: 0;
  }
  
  /* Items a texty vedľa seba */
  .section-items {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  
  @media (max-width: 768px) {
    .section-items {
      display: grid;
      row-gap: 50px;
      align-self: center;
      justify-content: center;
    }
  
    .section-container {
      display: flex;
      justify-content: center;
      align-self: center;
      margin: 0;
    }
  
    .vertical-text-section h1 {
      display: none;
    }
  
    .info-section {
      margin-top: -0px;
    }
  
    .formats-underline {
      margin: 0 auto;
    }
  }
  
  .item-wrapper {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  
  .item {
    text-align: center;
    overflow: hidden;
    width: 280px;
    position: relative;
  }
  
  .item img {
    width: 100%;
    height: 350px;
    transition: filter 0.3s ease;
  }
  
  .item:hover img {
    filter: blur(4px);
  }
  
  .hover-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .item:hover .hover-content {
    opacity: 1;
  }
  
  .hover-button {
    background-color: rgb(194, 154, 154);
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .hover-button:hover {
    background-color: rgb(104, 82, 82);
    color: #fff;
  }
  
  .vertical-text-item {
    writing-mode: vertical-rl;
    rotate: 180deg;
    font-size: 18px;
    font-weight: bold;
    color: black;
    text-align: center;
    white-space: nowrap;
    margin-left: 10px;
    margin-bottom: 10px;
    align-self: end;
  }
  
  /* Formats Section */
  .formats-section {
    background-color: #f8f8f8;
    padding: 100px 0 100px 0;
  }
  
  .formats-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .formats-icon {
    flex-shrink: 0;
    margin-right: 20px;
  }
  
  .formats-content {
    max-width: 600px;
  }
  
  .formats-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: left;
  }
  
  .formats-underline {
    width: 50px;
    height: 3px;
    background-color: #000;
    margin-bottom: 20px;
  }
  
  .formats-description {
    font-size: 16px;
    line-height: 1.6;
    text-align: left;
    margin-bottom: 30px;
  }
  
  .formats-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
  }
  
  .formats-button:hover {
    background-color: #555;
  }
  
  /* Lightbox štýl */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .lightbox-content {
    position: relative;
    width: 80%;
    height: 80%;
    background: white;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
  

@media (max-width: 768px) {
  .documents {
    display: flex;
    flex-direction: column;
    padding-top: 120px !important;
    padding-left: 0 !important;
  }

  .documents-grid {
    flex-direction: column;
  }

  .document-item {
    margin-bottom: 20px;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .svg-container {
    margin-bottom: 10px;
  }

  .text-container {
    margin: 0 !important;
    height: auto;
    align-items: center;
    text-align: center !important;
  }

  .vertical-text {
    transform: rotate(0deg) !important;
    writing-mode: horizontal-tb !important;
    text-align: center !important;
  }

  .section-heading {
    padding: 0 !important;
    text-align: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .documents-grid {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .document-item {
    width: 180px;
    height: 300px;
    flex-direction: column;
    align-items: center;
  }

  .svg-container {
    padding: 60px 20px;
  }

  .svg-container img {
    width: 80px;
    height: 80px;
  }

  .text-container {
    margin: 0;
    height: auto;
    align-items: center;
    text-align: center;
  }

  .vertical-text {
    transform: rotate(0deg);
    writing-mode: horizontal-tb;
    text-align: center;
    font-size: 1rem;
  }

  .section-heading {
    font-size: 1.8rem;
    padding-left: 0;
    text-align: center;
    margin-bottom: 30px;
  }
}

@media (min-width: 1025px) and (max-width: 1366px) {
  .documents-grid {
    justify-content: space-around;
  }

  .document-item {
    width: 190px;
    height: 330px;
  }

  .svg-container {
    padding: 65px 25px;
  }

  .svg-container img {
    width: 90px;
    height: 90px;
  }

  .text-container {
    margin: 0;
  }

  .vertical-text {
    font-size: 1.1rem;
  }

  .section-heading {
    font-size: 1.9rem;
  }
}
  .lightbox-content iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    color: #333;
    cursor: pointer;
  }
  
  /* Responzivita */
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
      max-height: 33%;
      max-width: 100% !important;
      margin-bottom: -70%;
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
      width: 80vw !important;
      padding-bottom: 20px;
    }
  
    .info-content p {
      font-size: 0.8rem !important;
    }
  
    .showroom img {
      height: 35vh !important;
      width: 100vw !important;
    }
  
    .showroom {
      padding-top: 100px !important;
    }
  
    .info-content {
      padding-left: 0px !important;
    }
  
    .formats-container {
      flex-direction: column;
      align-items: center;
    }
  
    .formats-icon {
      margin-bottom: 20px;
    }
  
    .formats-content {
      max-width: 100%;
      text-align: center;
    }
  
    .formats-title,
    .formats-description {
      text-align: center;
    }
  }
  </style>
  