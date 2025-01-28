<template>
  <div class="dashboard">
    <!-- Başlık -->
    <header>
      <h1>Finans Takip Paneli</h1>
      <p>Gelir ve giderlerinizi düzenli bir şekilde takip edin.</p>
    </header>

    <!-- Gelir ve Gider Özeti -->
    <section class="summary">
      <div class="card">
        <h2>Toplam Gelir</h2>
        <p>{{ totalIncome }}₺</p>
      </div>
      <div class="card">
        <h2>Toplam Gider</h2>
        <p>{{ totalExpense }}₺</p>
      </div>
      <div class="card">
        <h2>Bütçe Durumu</h2>
        <p
          :class="{ positive: budget >= 0, negative: budget < 0 }"
        >
          {{ budget >= 0 ? `Kalan Bütçe: ${budget}₺` : `Açık: ${-budget}₺` }}
        </p>
      </div>
    </section>

    <!-- Hızlı Erişim Butonları -->
    <section class="actions">
      <router-link to="/income">
        <button>Gelirler</button>
      </router-link>
      <router-link to="/expenses">
        <button>Giderler</button>
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // Vuex'ten toplam gelir ve gider bilgilerini al
    ...mapGetters({
      totalIncome: "totalIncome", // Toplam gelir
      totalExpense: "totalExpense", // Toplam gider
    }),
    // Gelir-gider farkını hesapla
    budget() {
      return this.totalIncome - this.totalExpense;
    },
  },
};
</script>

<style scoped>
/* Genel Stiller */
.dashboard {
  padding: 2em;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

/* Başlık Stilleri */
header {
  text-align: center;
  margin-bottom: 2em;
}

header h1 {
  font-size: 2.5rem;
  color: #42b883;
}

header p {
  font-size: 1.2rem;
  color: #555;
}

/* Özeti Gösteren Kartlar */
.summary {
  display: flex;
  justify-content: space-around;
  gap: 1em;
  margin-bottom: 2em;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5em;
  text-align: center;
  flex: 1;
}

.card h2 {
  margin-bottom: 0.5em;
  color: #333;
}

.card p {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Bütçe Durumu Renkleri */
.positive {
  color: #28a745;
}

.negative {
  color: #dc3545;
}

/* Hızlı Erişim Butonları */
.actions {
  text-align: center;
}

.actions button {
  margin: 0 1em;
  padding: 0.8em 1.5em;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.actions button:hover {
  background-color: #0056b3;
}
</style>
