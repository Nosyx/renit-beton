<template>
  <section class="documents">
    <div class="nadpis">
      <h2 class="section-heading">na stiahnutie</h2>
      <div class="underline"></div>
    </div>
    <div class="documents-grid">
      <div class="document-item" v-for="(doc, index) in documents" :key="index">
        <div class="svg-container">
          <img :src="doc.imgSrc" :alt="doc.altText" />
          <button @click="handlePdfClick(doc.pdfSrc, doc.altText)">
            Zobraziť PDF
          </button>
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
  name: "Listy",
  data() {
    return {
      pdfVisible: false,
      pdfSrc: "",
      documents: [
        {
          imgSrc: "src/assets/mrazuvzdornost.svg",
          altText: "Mrazuvzdornosť",
          text: "Mrazuvzdornosť",
          pdfSrc: "/src/assets/pdf/mrazuvzdornost.pdf",
        },
        {
          imgSrc: "src/assets/Nasiakavost.svg",
          altText: "Nasiakavosť",
          text: "Nasiakavosť",
          pdfSrc: "/src/assets/pdf/nasiakavost.pdf",
        },
        {
          imgSrc: "src/assets/smyk.svg",
          altText: "Odolnosť proti šmyku",
          text: "Odolnosť proti šmyku",
          pdfSrc: "src/assets/pdf/odolnost_proti_smyku.pdf",
        },
        {
          imgSrc: "src/assets/staticky-vypocet.svg",
          altText: "Statický výpočet",
          text: "Statický výpočet",
          pdfSrc: "src/assets/pdf/staticky_vypocet.pdf",
        },
        {
          imgSrc: "src/assets/posudenie.svg",
          altText: "Technické posúdenie",
          text: "Technické posúdenie",
          pdfSrc: "src/assets/pdf/technicke_osvedcenie.pdf",
        },
        {
          imgSrc: "src/assets/vlastnosti.svg",
          altText: "Technické vlastnosti",
          text: "Technické vlastnosti",
          pdfSrc: "src/assets/pdf/Technicke_vlastnosti.pdf",
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
}

button:hover {
  background-color: rgb(80, 76, 76);
  cursor: pointer;
}

.nadpis {
  max-width: 80%;
  margin-left: 5%;
}

.nadpis h2 {
  font-size: 30px;
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
  width: 200px;
  height: 350px;
  margin: 10px;
}

.svg-container {
  background: white;
  padding: 60px 30px;
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
