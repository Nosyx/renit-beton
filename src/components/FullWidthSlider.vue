<template>
  <div class="carousel">
    <div
      class="carousel-container"
      @mousedown="startTouch"
      @mousemove="moveTouch"
      @mouseup="endTouch"
      @mouseleave="resetTouch"
      @touchstart="startTouch"
      @touchmove="moveTouch"
      @touchend="endTouch"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="['carousel-item', getSlideClass(index)]"
        @click="openLightbox(slide, $event)"
      >
        <img :src="slide.image" :alt="slide.title" />
        <div class="overlay">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-button prev" @click.stop="prevSlide">‹</button>
    <button class="carousel-button next" @click.stop="nextSlide">›</button>
    <button class="view-all" @click="goToReferences">Pozrieť všetky referencie</button>

    <div v-if="lightboxVisible" class="lightbox" @click.self="closeLightbox">
      <img :src="lightboxImage" alt="Lightbox Image" />
      <button class="lightbox-button prev" @click.stop="prevLightbox">‹</button>
      <button class="lightbox-button next" @click.stop="nextLightbox">›</button>
      <button class="lightbox-close" @click="closeLightbox">✕</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullWidthSlider",
  data() {
    return {
      slides: [
        {
          image: "src/assets/Referencia1.jpg",
          title: "Mestečko NIVY - Bratislava",
          description: "Kvetináče",
        },
        {
          image: "src/assets/Referencia2.jpg",
          title: "Zuckermandel - ČSOB",
          description: "Obklady a dlažby",
        },
        {
          image: "src/assets/Referencia3.jpg",
          title: "Liget - Bratislava",
          description: "Kvetináče",
        },
      ],
      currentIndex: 0,
      startX: 0,
      endX: 0,
      isSwiping: false,
      lightboxVisible: false,
      lightboxIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    startTouch(event) {
      this.startX = event.touches ? event.touches[0].clientX : event.clientX;
      this.isSwiping = true;
      if (typeof fullpage_api !== "undefined") {
        fullpage_api.setAllowScrolling(false); // Zakázanie scrollovania počas interakcie
      }
    },
    moveTouch(event) {
      if (!this.isSwiping) return;
      this.endX = event.touches ? event.touches[0].clientX : event.clientX;
    },
    endTouch() {
      if (!this.isSwiping) return;
      const threshold = 50;
      if (this.startX - this.endX > threshold) {
        this.nextSlide();
      } else if (this.endX - this.startX > threshold) {
        this.prevSlide();
      }
      this.resetTouch();
      if (typeof fullpage_api !== "undefined") {
        fullpage_api.setAllowScrolling(true); // Obnovenie scrollovania po interakcii
      }
    },
    resetTouch() {
      this.startX = 0;
      this.endX = 0;
      this.isSwiping = false;
    },
    getSlideClass(index) {
      if (index === this.currentIndex) return "active";
      if (
        index ===
        (this.currentIndex - 1 + this.slides.length) % this.slides.length
      )
        return "prev";
      if (
        index ===
        (this.currentIndex + 1) % this.slides.length
      )
        return "next";
      return "hidden";
    },
    openLightbox(slide, event) {
      if (event.target.tagName !== "IMG") return;
      this.lightboxIndex = this.slides.indexOf(slide);
      this.lightboxVisible = true;
      if (typeof fullpage_api !== "undefined") {
        fullpage_api.setAllowScrolling(false); // Zakázanie scrollovania počas otvoreného lightboxu
      }
    },
    closeLightbox() {
      this.lightboxVisible = false;
      if (typeof fullpage_api !== "undefined") {
        fullpage_api.setAllowScrolling(true); // Obnovenie scrollovania po zatvorení lightboxu
      }
    },
    prevLightbox() {
      this.lightboxIndex =
        (this.lightboxIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextLightbox() {
      this.lightboxIndex =
        (this.lightboxIndex + 1) % this.slides.length;
    },
    goToReferences() {
      // Navigácia na URL /zakazkova-vyroba/#referencie
      window.location.href = "/zakazkova-vyroba/#referencie";
    },
  },
  computed: {
    lightboxImage() {
      return this.slides[this.lightboxIndex].image;
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #f8f8f8;
}

.carousel-container {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.carousel-item {
  position: absolute;
  width: 30%;
  height: 80%;
  transition: transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease;
  opacity: 0;
  transform: scale(0.8);
  cursor: pointer;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.carousel-item.active {
  opacity: 1;
  transform: scale(1);
  z-index: 3;
}

.carousel-item.prev {
  opacity: 0.5;
  transform: translateX(-50%) scale(0.9);
  filter: blur(5px);
}

.carousel-item.next {
  opacity: 0.5;
  transform: translateX(50%) scale(0.9);
  filter: blur(5px);
}

.carousel-item.hidden {
  opacity: 0;
  transform: scale(0.5);
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  border-radius: 0 0 10px 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.carousel-item:hover .overlay {
  opacity: 1;
}

.carousel-button {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 4;
}

.carousel-button.prev {
  left: 10px;
}

.carousel-button.next {
  right: 10px;
}

.carousel-button:hover {
  background: rgba(0, 0, 0, 0.9);
}

.view-all {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: white;
  background-color: #333;
  cursor: pointer;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  border: solid 1px black;
}

.view-all:hover {
  background-color: #413d3d;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.lightbox-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  z-index: 11;
}

.lightbox-button.prev {
  left: 20px;
}

.lightbox-button.next {
  right: 20px;
}

.lightbox-button:hover {
  background: rgba(0, 0, 0, 0.9);
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  z-index: 11;
}

.lightbox-close:hover {
  background: rgba(0, 0, 0, 0.9);
}

@media (max-width: 768px) {
  .carousel-item {
    width: 60%; /* Zníženie šírky na mobiloch */
    height: auto; /* Automatická výška */
    opacity: 0.5; /* Neaktívne obrázky budú jemne viditeľné */
    transform: scale(0.8); /* Zmenšenie neaktívnych obrázkov */
    filter: blur(5px); /* Rozmazanie neaktívnych obrázkov */
    position: absolute;
    transition: transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease;
  }

  .carousel-item.active {
    opacity: 1;
    transform: scale(1); /* Aktívny obrázok bude väčší */
    filter: none; /* Bez rozmazania */
    z-index: 3; /* Aktívny obrázok bude na vrchu */
  }

  .carousel-item.prev {
    transform: translateX(-50%) scale(0.8); /* Posunutie a zmenšenie vľavo */
    opacity: 0.5;
    z-index: 2; /* Nižší z-index pre ostatné obrázky */
  }

  .carousel-item.next {
    transform: translateX(50%) scale(0.8); /* Posunutie a zmenšenie vpravo */
    opacity: 0.5;
    z-index: 2; /* Nižší z-index pre ostatné obrázky */
  }

  .carousel-button {
    top: 50%;
    font-size: 1.5rem; /* Mierne väčšie tlačidlá na mobiloch */
    width: 40px;
    height: 40px;
  }

  .view-all {
    width: 80%;
    font-size: 1rem;
    margin: 20px auto;
    padding: 10px 15px;
    text-align: center;
    background-color: #e3ccae;
    border-radius: 5px;
    border: 1px solid black;
  }

  .view-all:hover {
    background-color: #a38a6a;
  }

  .carousel-button.prev {
    top: 42%;
  }

  .carousel-button.next {
    top: 42%;
  }
}

</style>
