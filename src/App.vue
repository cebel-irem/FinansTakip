<script setup>
// Global bileşenler veya CSS'yi buraya ekleyebilirsiniz
</script>

<template>
  <div id="app">
    <!-- Uygulama Genel Header -->
    <header class="app-header">
      <nav>
        <h1>Finans Takip Uygulaması</h1>
        <ul class="nav-links">
          <li><router-link to="/">Ana Sayfa</router-link></li>
          <li><router-link to="/income">Gelirler</router-link></li>
          <li><router-link to="/expenses">Giderler</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- Ana İçerik Alanı -->
    <main class="app-main">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <p>&copy; 2025 Finans Takip Uygulaması - Tüm Hakları Saklıdır</p>
    </footer>
  </div>
</template>

<style scoped>
/* Genel Stiller */
#app {
  font-family: 'Arial', sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

/* Header Stilleri */
.app-header {
  background-color: #42b883;
  color: white;
  padding: 1.5em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.app-header h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1.5em;
}

.nav-links li {
  display: inline;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #dff7eb;
}

/* Ana İçerik Stilleri */
.app-main {
  padding: 2em;
  min-height: calc(100vh - 170px); /* Header ve footer yüksekliğine göre ayar */
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2em auto;
  max-width: 1200px;
}

/* Footer Stilleri */
.app-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1.5em;
  margin-top: auto;
  font-size: 1rem;
  border-top: 3px solid #42b883;
}  
</style>
