<template>
    <button :class="{ 'show': isVisible }" @click="scrollToTop" class="to-top-btn">
      <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 9.5L9.5 1.5L17.5 9.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </template>
  
  <script>
  export default {
    name: 'ToTheTop',
    data() {
      return {
        isVisible: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.checkScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.checkScroll);
    },
    methods: {
      checkScroll() {
        this.isVisible = window.scrollY > window.innerHeight;
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
  };
  </script>
  
  <style scoped>
  .to-top-btn {
    z-index: 1000 !important;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .to-top-btn svg {
    width: 19px;
    height: 11px;
  }
  
  .to-top-btn.show {
    opacity: 1;
  }
  
  .to-top-btn:hover {
    background: #555;
  }
  
  .to-top-btn:active {
    transform: scale(0.95);
  }
  </style>
  