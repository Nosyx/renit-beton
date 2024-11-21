<template>
  <section class="blog-section">
    <div class="blog-videos">
      <div class="video-item">
        <div class="video-wrapper">
          <video
            ref="renitVideo"
            controls
            poster="/src/assets/renitbeton-video-thumbnail.png"
          >
            <source src="/src/assets/renitbeton-video.mp4" type="video/mp4" />
            <!-- Fallback for browsers that do not support HTML5 video -->
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="vertical-text">
          <h3>spoznajte</h3>
        </div>
        <div class="vertical-text-2">
          <h3>renitbeton</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogVideo",
  mounted() {
    // Nastavenie hlasitosti na 20% pri načítaní komponentu
    const videoElement = this.$refs.renitVideo;
    if (videoElement) {
      videoElement.volume = 0.2; // Nastavenie hlasitosti na 20%
    }

    // Použitie Intersection Observer na detekciu, kedy je video v zobrazení
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(videoElement);
  },
  methods: {
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.$refs.renitVideo.play();
        } else {
          this.$refs.renitVideo.pause();
        }
      });
    },
  },
};
</script>

<style scoped>
.blog-section {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: #f9f9f9;
}

.blog-header {
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  max-height: 30% !important;
  width: 70%;
  align-self: center !important;
  justify-content: center;
}

.blog-image {
  width: 30%;
  margin-right: 20px;
}

.blog-text {
  width: 60%;
  text-align: left;
}

.blog-text h2 {
  font-size: 2rem;
  font-weight: bold;
  text-transform: lowercase;
  margin-bottom: 10px;
}

.blog-text p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.read-more {
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #333;
}

.read-more:hover {
  color: #555;
  border-bottom: 1px solid #555;
}

.blog-videos {
  display: flex;
  justify-content: space-around;
}

.video-item {
  position: relative;
  width: 60%;
}

.video-wrapper {
  width: 100%;
  overflow: hidden;
}

video {
  width: 100%;
  height: auto;
  display: block;
}



.vertical-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -50px;
}

.vertical-text h3 {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.1);
  text-transform: lowercase;
  margin-right: -20px;
}

.vertical-text-2 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -120px;
}

.vertical-text-2 h3 {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.1);
  text-transform: lowercase;
  margin-right: -20px;
}

@media (max-width: 768px) {
  .vertical-text-2 {
    display: none;
  }
}

@media (max-width: 1024px) {
  .blog-header {
    flex-direction: column;
  }

  .blog-image {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .blog-text {
    width: 100%;
    text-align: center;
  }

  .blog-videos {
    flex-direction: column;
  }

  .video-item {
    width: 100%;
    margin-bottom: 20px;
  }

  .vertical-text {
    right: -30px;
  }
}

@media (max-width: 1199px) {
  .blog-section {
    padding-top: 120px;
    padding-bottom: 30px;
  }

  .vertical-text {
    display: none;
  }

  .video-item {
    width: 100%;
    padding-bottom: 30px;
  }

  .blog-videos {
    display: flex;
    flex-direction: column;
  }

  .vertical-text-2 h3 {
    display: none;
  }
}
</style>
