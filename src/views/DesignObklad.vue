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
            <li><a href="/obklady">Obklady</a></li>
            <li><span>></span></li>
            <li><a href="/obklady/design-obklad">Design Obklady</a></li>
          </ul>
        </div>
      </nav>
  
      <!-- Hlavná sekcia s obkladmi -->
      <section class="info-section">
        <div class="info-container">
          <div class="info-image">
            <img src="../assets/showroom.jpeg" alt="Renit Beton Image" />
          </div>
          <h1 class="vertical-text">renit beton</h1>
          <div class="info-content">
            <h2>design obklady</h2>
            <div class="underline"></div>
            <p>{{ text.mainDescription }}</p>
          </div>
        </div>
      </section>
  
      <!-- Main Heading nad obkladmi -->
      <section class="main-heading">
        <p>{{ text.itemsHeading }}</p>
      </section>
  
      <!-- Items sekcia -->
      <div class="section-container">
        <div class="vertical-text-section">
          <h1 class="vertical-text-obklady">obklady</h1>
        </div>
  
        <div class="section-items">
          <div class="item-wrapper" v-for="(item, index) in items" :key="index">
            <div class="item">
              <a :href="item.link">
                <img :src="item.imgSrc" :alt="item.altText" />
                <div class="hover-content">
                  <button class="hover-button">Zobraziť produkty</button>
                </div>
              </a>
            </div>
            <div class="vertical-text-item">{{ item.title }}</div>
          </div>
        </div>
      </div>
  
      <!-- Sekcia s formátmi obkladov -->
      <section class="formats-section">
        <div class="formats-container">
          <!-- Ikona nalavo -->
          <div class="formats-icon">
            <img src="../assets/format-icon.svg" alt="Formáty ikonka" />
          </div>
  
          <!-- Obsah na pravo -->
          <div class="formats-content">
            <h2 class="formats-title">formáty obkladov</h2>
            <div class="formats-underline"></div>
            <p class="formats-description">{{ text.formatyText }}</p>
            <button class="formats-button" @click="handleButtonClick">
              Zobraziť zoznam
            </button>
          </div>
        </div>
      </section>
  
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
  
  export default {
    name: "DesignObklad",
    components: {
      Footer,
    },
    data() {
      return {
        pdfVisible: false,
        pdfSrc: "../src/assets/pdf/zoznam-formatov-obkladov.pdf", // nahraďte cestou k Vášmu PDF
        items: [
          {
            imgSrc: "/src/assets/obklad-tryx.jpeg",
            altText: "3D obklad TRYX",
            title: "3D obklad TRYX",
            link: "/obklady/design-obklad/obklad-tryx",
          },        
          {
            imgSrc: "/src/assets/obklad-rezide.jpeg",
            altText: "3D obklad REZIDE",
            title: "3D obklad REZIDE",
            link: "/obklady/design-obklad/obklad-rezide",
          },
  
        ],
        text: {
          mainDescription:
            "Vstúpte do sveta nekonečných možností s našimi betónovými dlažbami a obkladmi Renit beton. Každý kúsok je precízne a kvalitne spracovaný, aby vám robil radosť dlhé roky. Naše betónové dlažby a obklady nie sú len nevyhnutným, funkčným elementom vášho domova alebo podniku, ale sú tiež dizajnovými prvkami, ktoré dotvárajú prostredie a zdôrazňujú vašu individualitu. Na ich výrobu používame iba kvalitné materiály a pri tvorbe ich dizajnu sa riadime najnovšími trendami. Môžete si byť teda istí, že sa o nadčasovosť priestoru postarajú nie len odolnosťou ale aj prevedením. Zažite spojenie funkcionality a krásy s našimi betónovými dlažbami, ktoré budú estetickými aj praktickými prvkami vo vašom každodennom živote.",
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
          window.open(this.pdfSrc, '_blank');
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
    margin-top: 5%;
  }
  
  .info-image img {
    width: 28vw;
    min-height: 50vh;
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
  
  /* Items sekcia */
  .section-container {
    display: flex;
    align-items: flex-start;
    margin-top: 50px;
    justify-content: center;
    margin-left: -60px;
    padding-bottom: 50px;
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
  