<template>
    <Header />
    <!-- Hero sekcia -->
    <section class="hero-section"></section>
    <!-- Breadcrumbs sekcia -->
    <nav class="breadcrumbs">
      <div class="container-bd">
        <ul>
          <li><a href="/">Úvod</a></li>
          <li><span>></span></li>
          <li><a href="/dekoracie">Dekorácie</a></li>
          <li><span>></span></li>
          <li><a href="/dekoracie/betonova-miska-ovalis">Betónová miska OVALIS</a></li>
        </ul>
      </div>
    </nav>
  
    <div class="container">
      <!-- Obsah stránky -->
      <div class="content">
        <div class="left-side">
          <div class="main-image-container">
            <div class="main-image-overlay"></div>
            <div class="main-image" @click="openLightbox(selectedImageIndex)">
              <img :src="images[selectedImageIndex]" alt="Main Image" />
            </div>
            <div class="vertical-text">dekorácie</div>
          </div>
        </div>
        <div class="right-side">
          <h2>Betónová miska OVALIS</h2>
          <div class="underline"></div>
          <p>
            <br>
            Dizajnová a zároveň funkčná misa z pohľadového betónu, ktorá je určená na drobné ovocie, oriešky či iné pochutinky. Jej povrch je pokrytý potravinárskym ochranným náterom. Dodávame v rôznych farebných prevedeniach.<br><br><br>
          </p>
          <div class="thumbnail-wrapper">
            <div class="thumbnail-container">
              <div
                v-for="(image, index) in visibleThumbnails"
                :key="index"
                class="thumbnail"
                :class="{
                  active:
                    index + visibleThumbnailsStartIndex === selectedImageIndex,
                }"
                @click="selectImage(index)"
              >
                <img :src="image" :alt="'Thumbnail ' + (index + 1)" />
              </div>
            </div>
            <div class="arrow-right" @click="nextThumbnails">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-right"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Lightbox pre obrázky -->
      <Lightbox
        v-if="isLightboxOpen"
        :images="images"
        :initial-index="selectedImageIndex"
        @close="isLightboxOpen = false"
      />
  
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
  import Lightbox from "../components/Lightbox.vue";
  import Footer from "../components/Footer.vue";
  import Header from "../components/Header.vue";
  
  export default {
    name: "MiskaOvalis",
    components: {
      Lightbox,
      Footer,
      Header,
    },
    data() {
      return {
        selectedImageIndex: 0,
        pdfVisible: false,
        pdfSrc: "../src/assets/pdf/zoznam-formatov-obkladov.pdf", // Nahraďte cestou k PDF súboru
        isLightboxOpen: false,
        images: [
          "../src/assets/Ovalis1.jpg",
          "../src/assets/Ovalis2.jpg",
          "../src/assets/Ovalis3.jpg",
          "../src/assets/Ovalis4.jpg",
          "../src/assets/Ovalis5.jpg",
          "../src/assets/Ovalis6.jpg",

        ],
        visibleThumbnailsStartIndex: 0,
        thumbnailsPerView: 3, // Počet zobrazených náhľadov naraz
      };
    },
    computed: {
      visibleThumbnails() {
        return this.images.slice(
          this.visibleThumbnailsStartIndex,
          this.visibleThumbnailsStartIndex + this.thumbnailsPerView
        );
      },
    },
    methods: {
      handleButtonClick() {
        if (window.innerWidth < 1000) {
          const link = document.createElement("a");
          link.href = this.pdfSrc;
          link.download = "zoznam-formatov-obkladov.pdf";
          link.click();
        } else {
          this.pdfVisible = true;
        }
      },
      closePdf() {
        this.pdfVisible = false;
      },
      selectImage(index) {
        this.selectedImageIndex = index + this.visibleThumbnailsStartIndex;
      },
      openLightbox(index) {
        this.selectedImageIndex = index + this.visibleThumbnailsStartIndex;
        this.isLightboxOpen = true;
      },
      nextThumbnails() {
        // Zmena tak, aby sa posúvalo iba o jednu fotku
        if (
          this.visibleThumbnailsStartIndex + this.thumbnailsPerView <
          this.images.length
        ) {
          this.visibleThumbnailsStartIndex += 1;
        } else {
          this.visibleThumbnailsStartIndex = 0;
        }
  
        // Automaticky zvýrazní ďalšiu fotku
        this.selectedImageIndex =
          (this.selectedImageIndex + 1) % this.images.length;
        this.$forceUpdate(); // Zabezpečí, že Vue aktualizuje zobrazenie
      },
    },
  };
  </script>
  
  <style scoped>
  /* Breadcrumbs */
  .breadcrumbs {
    background-color: #fafafa;
    padding: 20px;
    font-size: 16px;
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
    background-image: url(../src/assets/langing-bg.jpeg);
    background-size: cover;
    background-position: center top;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #fff;
  }
  
  .content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    column-gap: 50px;
    margin: 20px auto;
    padding: 0 20px;
  }
  
  .left-side {
    position: relative;
    flex: 1;
    max-width: 50%;
  }
  
  .right-side {
    flex: 1;
    padding-left: 40px;
    max-width: 50%;
  }
  
  .vertical-text {
    position: absolute;
    top: 65%;
    right: -30%;
    transform: translateY(-50%) rotate(-90deg);
    font-size: 80px;
    color: lightgray;
    align-content: start;
  }
  
  .main-image-container {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .main-image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s ease;
    z-index: 1;
  }
  
  .main-image img {
    width: 500px;
    height: 500px;
    cursor: pointer;
    z-index: 2;
    position: relative;
  }
  
  .thumbnail-wrapper {
    display: flex;
    align-items: center;
  }
  
  .thumbnail-container {
    display: flex;
    justify-content: flex-start;
  }
  
  .thumbnail {
    margin: 0 5px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
  }
  
  .thumbnail.active {
    border-color: black;
  }
  
  .thumbnail img {
    width: 150px;
    height: 100%;
    object-fit: cover;
  }
  
  .arrow-right {
    margin: 0 10px;
    cursor: pointer;
    display: block;
  }
  
  .arrow-right svg {
    width: 24px;
    height: 24px;
  }
  
  h1 {
    font-size: 32px;
    margin-bottom: 5px;
  }
  
  h2 {
    font-size: 28px;
    margin-bottom: 15px;
  }
  
  .underline {
    width: 50px;
    height: 4px;
    background-color: black;
    margin-bottom: 20px;
  }
  
  /* Responsivita */
  @media screen and (max-width: 768px) {
    .content {
      flex-direction: column;
      align-items: center;
      padding: 0 10px;
    }
    .right-side {
      padding-left: 0;
      margin-top: 20px;
    }
    .vertical-text {
      display: none;
    }
    .left-side,
    .right-side {
      max-width: 100%;
    }
  
    .main-image img {
      width: 100%;
      height: auto;
    }

    .thumbnail img {
        max-width: 100%;
    }
  
    .arrow-right,
    .arrow-left {
      display: none;
    }
  
    .thumbnail-wrapper {
      justify-content: center;
    }
  
    .breadcrumbs {
      padding: 30px;
      margin: 0;
      align-items: center;
      align-self: center;
    }
  
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
  
    .formats-container {
      flex-direction: column;
      padding: 20px;
    }
  
    .formats-icon {
      margin-bottom: 20px;
    }
  
    .formats-content {
      max-width: 100%;
      text-align: center;
      align-self: center;
      padding-left: 10px;
    }
  
    .formats-title,
    .formats-description {
      text-align: center !important;
      align-self: center;
    }
  
    .formats-underline {
      margin: 0 auto;
      align-content: center;
    }
  }
  
  /* Formats Section */
  .formats-section {
    background-color: #fafafa;
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
  </style>
  