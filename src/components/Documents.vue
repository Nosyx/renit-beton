<template>
  <section class="documents">
    <div class="nadpis">
      <h2 class="section-heading">dokumenty</h2>
      <div class="underline"></div>
    </div>
    <div class="documents-grid">
      <div class="document-item" v-for="(doc, index) in documents" :key="index">
        <div class="svg-container">
          <img :src="doc.imgSrc" :alt="doc.altText" />
          <!-- Ak je link, zobraz ho, inak zobraz PDF v lightboxe cez anchor tag -->
          <a v-if="doc.link" :href="doc.link" target="_blank">
            <button>Zobraziť</button>
          </a>
          <a
            v-else
            href="#"
            @click.prevent="handlePdfClick(doc.zipSrc, doc.altText)"
          >
            <button>Zobraziť</button>
          </a>
        </div>

        <div class="text-container">
          <h3 class="vertical-text">{{ doc.text }}</h3>
        </div>
      </div>
    </div>

    <!-- Lightbox pre PDF -->
    <div v-if="pdfVisible" class="lightbox" @click="closePdf">
      <div class="lightbox-content" @click.stop>
        <iframe :src="pdfSrc" width="100%" height="100%"></iframe>
        <button class="close-button" @click="closePdf">✖</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Documents",
  data() {
    return {
      pdfVisible: false,
      pdfSrc: "",
      documents: [
        {
          imgSrc: "src/assets/euro.svg",
          altText: "Cenníky a rozmery",
          text: "Cenníky a rozmery",
          link: "src/assets/pdf/cenniky-a-rozmery.pdf", // PDF namiesto ZIP pre Cenníky a rozmery
        },
        {
          imgSrc: "src/assets/technicke-listy.svg",
          altText: "Technické listy",
          text: "Technické listy",
          link: "/technicke-listy", // Link pre Technické listy
        },
        {
          imgSrc: "src/assets/navody-montaz.svg",
          altText: "Návody k montáži",
          text: "Návody k montáži",
          zipSrc: "src/assets/zip/Navody.pdf", // PDF namiesto ZIP pre návody k montáži
        },
        {
          imgSrc: "src/assets/certifikaty.svg",
          altText: "Certifikáty",
          text: "Certifikáty",
          link: "src/assets/pdf/certifikaty-a-osvedcenia.pdf", // PDF namiesto ZIP pre Certifikáty
        },
        {
          imgSrc: "src/assets/reklamacny-poriadok.svg",
          altText: "Reklamačný poriadok",
          text: "Reklamačný poriadok",
          link: "src/assets/pdf/reklamacny-poriadok.pdf", // PDF namiesto ZIP pre Reklamačný poriadok
        },
      ],
    };
  },
  methods: {
    handlePdfClick(pdfSrc, altText) {
      if (window.innerWidth < 1000) {
        // Ak je šírka okna menšia ako 1000px, stiahni PDF
        const link = document.createElement("a");
        link.href = pdfSrc;
        link.download = altText;
        link.click();
      } else {
        // Inak zobraz PDF v lightboxe
        this.pdfSrc = pdfSrc;
        this.pdfVisible = true;
      }
    },
    closePdf() {
      this.pdfVisible = false;
    },
  },
};
</script>

<style scoped>
.documents {
  padding: 50px 20px;
  background-color: #fafafa;
  height: 100%;
}

button {
  margin-top: 20px;
  margin-bottom: -50px;
  padding: 10px;
  color: white;
  background-color: black;
  border-radius: 50px;
}

button:hover {
  background-color: rgb(80, 76, 76);
  cursor: pointer;
}

.nadpis {
  max-width: 80%;
  margin-left: 4%;
}

.nadpis h2 {
  font-size: 2.2rem;
  font-weight: 400;
}

.documents-grid {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.document-item {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  text-align: center;
  width: 270px;
  height: 350px;
  margin: 10px;
}

.svg-container {
  background: white;
  padding: 40px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.svg-container img {
  width: 100px;
  height: 100px;
}

.underline {
  width: 50px;
  height: 3px;
  background-color: #000;
  margin-bottom: 20px;
}

.text-container {
  margin-left: -10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
}

.vertical-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: #000;
  white-space: nowrap;
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

@media ((min-width: 1023px) and (max-width: 1441px)) {
  .documents-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media ((min-width: 1380px) and (max-width: 1440px)) {
  .documents-grid {
    padding-left: 50px;
  }
}
</style>
