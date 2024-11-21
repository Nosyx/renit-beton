<template>
  <!-- Hero sekcia -->
  <section class="hero-section"></section>
  <!-- Breadcrumbs sekcia -->
  <nav class="breadcrumbs">
    <div class="container-bd">
      <ul>
        <li><a href="/">Úvod</a></li>
        <li><span>></span></li>
        <li><a href="/dlazby">Dlažby</a></li>
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
          <div class="vertical-text">dlažby</div>
        </div>
      </div>
      <div class="right-side">
        <h2>Dlažby</h2>
        <div class="underline"></div>
        <p>
          Vstúpte do sveta nekonečných možností s našimi betónovými dlažbami a obkladmi Renit beton. Každý kúsok je precízne a kvalitne spracovaný, aby vám robil radosť dlhé roky.
Naše betónové dlažby a obklady nie sú len nevyhnutným, funkčným elementom vášho domova alebo podniku, ale sú tiež dizajnovými prvkami, ktoré dotvárajú prostredie a zdôrazňujú vašu individualitu. Na ich výrobu používame iba kvalitné materiály a pri tvorbe ich dizajnu sa riadime najnovšími trendami. Môžete si byť teda istí, že sa o nadčasovosť priestoru postarajú nie len odolnosťou ale aj prevedením. 
Zažite spojenie funkcionality a krásy s našimi betónovými dlažbami, ktoré budú estetickými aj praktickými prvkami vo vašom každodennom živote.

        </p>

      </div>
    </div>

        <!-- Main Heading nad obkladmi -->
        <section class="main-heading">
          <p>{{ text.itemsHeading }}</p>
        </section>
    

       <!-- Items sekcia -->
       <div class="section-container">
        <div class="vertical-text-section">
          <h1 class="vertical-text-obklady">dlažby</h1>
        </div>
  
        <div class="section-items">
          <div class="item-wrapper" v-for="(item, index) in items" :key="index">
            <div class="item">
              <a :href="item.link">
                <img :src="item.imgSrc" :alt="item.altText" />
                <div class="hover-content">
                  <button class="hover-button">Zobraziť produkt</button>
                </div>
              </a>
            </div>
            <div class="vertical-text-item">{{ item.title }}</div>
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
  <!-- Sekcia s formátmi obkladov -->
  <section class="formats-section">
    <div class="formats-container">
      <div class="formats-icon">
        <img src="../assets/format-icon.svg" alt="Formáty ikonka" />
      </div>

      <div class="formats-content">
        <h2 class="formats-title">formáty dlažby</h2>
        <div class="formats-underline"></div>
        <p class="formats-description">
          Zoznam formátov dlažby zahŕňa rôzne veľkosti a tvary, vrátane štvorcov, obdĺžnikov a mozaikových vzorov. Tieto formáty umožňujú prispôsobiť dizajn každému priestoru, čím zvyšujú estetickú hodnotu a funkčnosť dlažby.
        </p>
        <button class="formats-button" @click="handleButtonClick">
          Zobraziť zoznam
        </button>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Lightbox from "../components/Lightbox.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  name: "Dlazby",
  components: {
    Lightbox,
    Footer,
    Header,
  },
  data() {
    return {
      selectedImageIndex: 0,
      pdfVisible: false,
      pdfSrc: "../src/assets/pdf/zoznam-formatov-dlazby.pdf", // Nahraďte cestou k PDF súboru
      isLightboxOpen: false,
      items: [
        {
          imgSrc: "src/assets/podk-dlazba.jpg",
          altText: "Dlažba",
          title: "Dlažba",
          link: "/dlazby/dlazba",
        },
        {
          imgSrc: "src/assets/podk-dizajn-dlazba.jpg",
          altText: "Design dlažba",
          title: "Design dlažba",
          link: "/dlazby/design-dlazba",
        },
        {
          imgSrc: "src/assets/dlazba2.jpg",
          altText: "Dlažba leptaná",
          title: "Dlažba (leptaná)",
          link: "/dlazby/design-dlazba",
        },
      ],
      text: {
        mainDescription:
          "Vstúpte do sveta nekonečných možností s našimi betónovými dlažbami a obkladmi Renit beton. Každý kúsok je precízne a kvalitne spracovaný, aby vám robil radosť dlhé roky. Naše betónové dlažby a obklady nie sú len nevyhnutným, funkčným elementom vášho domova alebo podniku, ale sú tiež dizajnovými prvkami, ktoré dotvárajú prostredie a zdôrazňujú vašu individualitu. Na ich výrobu používame iba kvalitné materiály a pri tvorbe ich dizajnu sa riadime najnovšími trendami. Môžete si byť teda istí, že sa o nadčasovosť priestoru postarajú nie len odolnosťou ale aj prevedením. Zažite spojenie funkcionality a krásy s našimi betónovými dlažbami, ktoré budú estetickými aj praktickými prvkami vo vašom každodennom živote.",
        itemsHeading:
          "V Renit beton sme presvedčení, že naše výrobky sú stvorené pre Vás a Vaše jedinečné potreby. Zakladáme si na individuálnom prístupe ku každému zákazníkovi, pretože pre nás nie ste len klientom, ste naším partnerom a spoločne nájdeme riešenie, ktoré naplní Vaše očakávania.",
        formatyText:
          "Zoznam formátov dlažby zahŕňa rôzne veľkosti a tvary, vrátane štvorcov, obdĺžnikov a mozaikových vzorov. Tieto formáty umožňujú prispôsobiť dizajn každému priestoru, čím zvyšujú estetickú hodnotu a funkčnosť dlažby.",
      },
      images: [
        "../src/assets/dlazba-6.jpg",
        "../src/assets/dlazba-2.jpg",
        "../src/assets/dlazba-4.jpg",
        "../src/assets/dlazba-5.jpg",
        "../src/assets/dlazba-7.jpg",
        "../src/assets/dlazba-8.jpg",
        "../src/assets/dlazba-9.jpg",
        "../src/assets/dlazba-10.jpg",
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
        link.download = "zoznam-formatov-dlazby.pdf";
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

/* Main Heading */
.main-heading {
  text-align: center;

  font-size: 1rem;
  max-width: 100%;
  margin: 0 auto 50px auto;
  font-weight: 300;
}

.main-heading p{
  text-align: center;
  padding: 20px;
  font-size: 1rem;
  max-width: 60%;
  margin: 0 auto 50px auto;
  font-weight: 300;
}

/* Items a texty vedľa seba */
.section-items {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-bottom: 50px;
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
  column-gap: 80px;
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
  top: 75%;
  right: -25%;
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
  width: 200px;
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

p {
  padding: 30px 0px 15px 0px;
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

  .section-items {
    display: grid;
    align-self: center;
    align-items: center;
  }

  .section-container {
    margin-left: 30px;
  }

  .item-wrapper {
    margin-bottom: 50px;
  }

  .vertical-text-section h1 {
    display: none;
  }

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

  .arrow-right {
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
