<template>
    <div class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="close-btn" @click="closeLightbox">✕</button>
        <button class="prev-btn" @click="prevImage">◀</button>
        <img :src="images[currentIndex]" alt="Lightbox Image" />
        <button class="next-btn" @click="nextImage">▶</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: Array,
      initialIndex: Number,
    },
    data() {
      return {
        currentIndex: this.initialIndex,
      };
    },
    methods: {
      closeLightbox() {
        this.$emit("close");
        this.removeKeyListeners();
      },
      prevImage() {
        this.currentIndex =
          (this.currentIndex + this.images.length - 1) % this.images.length;
      },
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      handleKeydown(event) {
        if (event.key === "ArrowLeft") {
          this.prevImage();
        } else if (event.key === "ArrowRight") {
          this.nextImage();
        } else if (event.key === "Escape") {
          this.closeLightbox();
        }
      },
      addKeyListeners() {
        window.addEventListener("keydown", this.handleKeydown);
      },
      removeKeyListeners() {
        window.removeEventListener("keydown", this.handleKeydown);
      },
    },
    mounted() {
      this.addKeyListeners();
    },
    beforeUnmount() {
      this.removeKeyListeners();
    },
  };
  </script>
  
  <style scoped>
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
    z-index: 1000;
  }
  
  .lightbox-content {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 90%;
    max-height: 90%;
  }
  
  .lightbox img {
    max-width: 100%;
    max-height: 100%;
  }
  
  .close-btn,
  .prev-btn,
  .next-btn {
    background: none;
    border: none;
    color: white;
    font-size: 2em;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    transition: transform 0.2s ease;
  }
  
  .close-btn {
    top: 10px;
    right: 10px;
  }
  
  .prev-btn {
    left: 10px;
  }
  
  .next-btn {
    right: 10px;
  }
  
  .prev-btn:hover,
  .next-btn:hover {
    transform: scale(1.2);
  }
  
  .prev-btn::before,
  .next-btn::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }
  
  .prev-btn::before {
    border-width: 20px 30px 20px 0;
    border-color: transparent white transparent transparent;
    left: 0;
  }
  
  .next-btn::before {
    border-width: 20px 0 20px 30px;
    border-color: transparent transparent transparent white;
    right: 0;
  }
  </style>
  