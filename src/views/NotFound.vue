<template>
    <div class="not-found">
      <h1>404 - Sayfa Bulunamadı</h1>
      <p>Aradığınız sayfa bulunamadı. Lütfen doğru URL'yi girdiğinizden emin olun.</p>
      <router-link to="/">Ana Sayfa'ya Dön</router-link>
    </div>
  </template>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 5em;
  }
  
  .not-found h1 {
    font-size: 2.5rem;
    color: #d9534f;
  }
  
  .not-found p {
    margin-top: 1em;
    font-size: 1.2rem;
  }
  
  .not-found a {
    display: inline-block;
    margin-top: 1.5em;
    padding: 0.8em 1.5em;
    background-color: #42b883;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .not-found a:hover {
    background-color: #369e75;
  }
  </style>
  