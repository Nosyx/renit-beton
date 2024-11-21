<template>
    <div v-if="!cookiesAccepted" class="cookie-banner">
      <p>
        Naša stránka používa súbory cookies, aby sme vám mohli poskytovať najlepšie možné služby. Pokračovaním v prehliadaní súhlasíte s používaním cookies na personalizáciu obsahu a analýzu návštevnosti. Viac informácií nájdete v našich <a href="/privacy-policy" target="_blank">Zásadách ochrany osobných údajov</a>.
      </p>
      <div class="button-container">
        <button @click="acceptCookies">Súhlasím</button>
        <button @click="declineCookies">Nesúhlasím</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cookiesAccepted: false,
      };
    },
    mounted() {
      this.cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
    },
    methods: {
      acceptCookies() {
        this.cookiesAccepted = true;
        localStorage.setItem('cookiesAccepted', 'true');
      },
      declineCookies() {
        this.cookiesAccepted = true; // Nastavíme cookiesAccepted na true, aby sa banner skryl
      },
    },
  };
  </script>
  
  <style>
  .cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    padding: 15px;
    font-size: 14px;
    z-index: 1000;
  }
  
  .cookie-banner p {
    margin: 0;
    display: block;
  }
  
  .cookie-banner a {
    color: #4CAF50;
    text-decoration: underline;
  }
  
  .button-container {
    margin-top: 10px;
  }
  
  .cookie-banner button {
    margin-left: 10px;
    padding: 8px 15px;
    border: none;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    font-size: 14px;
  }
  
  .cookie-banner button:first-of-type {
    margin-left: 0;
  }
  
  .cookie-banner button:hover {
    background-color: #45a049;
  }
  </style>
  