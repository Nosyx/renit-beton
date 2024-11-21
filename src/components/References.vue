<template>
  <section class="references">
    <h2 class="section-heading">referencie</h2>
    <div class="references-grid">
      <div class="reference-item" v-for="(reference, index) in references" :key="index">
        <div class="image-container">
          <img :src="reference.imgSrc" :alt="reference.altText" />
          <a href="#" class="overlay-link">Referencie</a>
        </div>
        <div class="text-container">
          <h3 class="vertical-text">{{ reference.text }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
export default {
  name: 'References',
  data() {
    return {
      references: [
        { imgSrc: '/src/assets/referencia-1.png', altText: 'Reference 1', text: 'Dlažby' },
        { imgSrc: '/src/assets/referencia-2.png', altText: 'Reference 2', text: 'Mikrocement' },
        { imgSrc: '/src/assets/referencia-3.png', altText: 'Reference 3', text: 'Kvetináče' },
        { imgSrc: '/src/assets/referencia-4.png', altText: 'Reference 4', text: 'Dlažby' },
        { imgSrc: '/src/assets/referencia-5.png', altText: 'Reference 5', text: 'Kvetináče' },
      ],
    };
  },
};
</script>


<style scoped>
.references {
  padding: 50px 20px;
}

.section-heading {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 40px;
  text-transform: lowercase;
}

.references h2 {
  padding-left: 30px;
}

.references-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.reference-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 10px;
  background: #FAFAFA;
  flex: 1 1 calc(20% - 20px); /* Adjust width as needed */
  display: flex;
  flex-direction: row;
}

.image-container {
  position: relative;
  padding: 20px;
  background-color: #FAFAFA
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.overlay-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  color: #000000;
  text-decoration: none;
  font-size: 30px;
  opacity: 0;
  transition: opacity 0.3s;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.image-container:hover .overlay-link {
  opacity: 1;
}

.reference-item a {
  color: #000;
}

.reference-item a:hover{
  color: rgb(194, 154, 154)
}

.text-container {
  margin-left: -10px; 
  display: flex;
  align-items: end;
  justify-content: center;
  height: 100%;
  margin-bottom: 30px;
}

.vertical-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: #000;
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .reference-item {
    flex: 1 1 calc(33.33% - 20px); /* Adjust width for tablet view */
  }
}

@media (max-width: 768px) {
  .reference-item {
    flex: 1 1 calc(50% - 20px); /* Adjust width for mobile view */
    
  }

  .text-container {
    margin: 0 !important;
    align-items: start !important;
    align-self: center !important;
    align-content: center;
    text-align: center !important;
    order: 1 !important;
  }

  .vertical-text {
    transform: rotate(0deg) !important;
    writing-mode: horizontal-tb !important;
    text-align: center !important;
    font-size: 2rem;
    order: 2 !important;
  }

  .references {
    padding-top: 150px;
  }

  .references h2 {
    text-align: center;
    padding: 0;
  }

  .vertical-text {
    margin: 0;
  }
}

@media (max-width: 480px) {
  .reference-item {
    flex: 1 1 calc(100% - 20px); /* Adjust width for small mobile view */
    flex-direction: column; /* Adjust layout for small mobile view */
  }

  .text-container {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>
