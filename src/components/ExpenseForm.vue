<template>
  <div class="expense-form card">
    <h2>Gider Ekle</h2>
    <form @submit.prevent="addExpense">
      <div class="form-group">
        <label for="expense-amount">Tutar:</label>
        <input
          id="expense-amount"
          v-model="amount"
          type="number"
          placeholder="Gider tutarını girin"
          required
          class="form-input"
        />
      </div>
      <div class="form-group">
        <label for="expense-category">Kategori:</label>
        <select v-model="category" required class="form-input">
          <option value="">Kategori seçin</option>
          <option value="Yemek">Yemek</option>
          <option value="Ulaşım">Ulaşım</option>
          <option value="Eğlence">Eğlence</option>
          <option value="Diğer">Diğer</option>
        </select>
      </div>
      <div class="form-group">
        <label for="expense-description">Açıklama (Opsiyonel):</label>
        <input
          id="expense-description"
          v-model="description"
          type="text"
          placeholder="Gider açıklaması"
          class="form-input"
        />
      </div>
      <button type="submit" class="form-button">Ekle</button>
    </form>

    <!-- Giderlerin Toplamı -->
    <div class="expense-summary" v-if="totalAmount > 0">
      <h3>Toplam Gider: {{ totalAmount }}₺</h3>
      <ul>
        <li v-for="expense in expenses" :key="expense.id">
          {{ expense.category }} - {{ expense.amount }}₺ ({{ expense.description || "Belirtilmedi" }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      amount: '', // Gider miktarı
      category: '', // Gider kategorisi
      description: '', // Gider açıklaması
      expenses: [], // Eklenen giderlerin listesi
    };
  },
  computed: {
    // Toplam gider miktarını hesaplayan computed property
    totalAmount() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
  },
  methods: {
    addExpense() {
      if (this.amount && this.category) {
        const expense = {
          id: Date.now(),
          amount: parseFloat(this.amount),
          category: this.category,
          description: this.description || 'Belirtilmedi', // Açıklama opsiyonel
        };

        // Gideri listeye ekle
        this.expenses.push(expense);

        // Gider eklendiğini üst bileşene bildir
        this.$emit('expense-added', expense);

        // Formu sıfırla
        this.amount = '';
        this.category = ''; // Kategori seçim alanını sıfırla
        this.description = '';
      } else {
        alert('Lütfen tüm zorunlu alanları doldurun!');
      }
    },
  },
};
</script>


<style scoped>
/* Form Stilleri */
.expense-form {
  max-width: 500px;
  margin: 2em auto;
  padding: 1.5em;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.expense-form h2 {
  text-align: center;
  margin-bottom: 1.5em;
  color: #d9534f;
  font-size: 1.8rem;
}

/* Form Grupları */
.form-group {
  margin-bottom: 1.5em;
}

.form-group label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 0.8em;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #d9534f;
  outline: none;
}

/* Buton Stili */
.form-button {
  width: 100%;
  padding: 0.8em;
  font-size: 1rem;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #c9302c;
}

/* Gider Özeti */
.expense-summary {
  margin-top: 2em;
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.expense-summary h3 {
  color: #d9534f;
  margin-bottom: 1em;
}

.expense-summary ul {
  list-style-type: none;
  padding: 0;
}

.expense-summary li {
  padding: 0.5em 0;
  border-bottom: 1px solid #eee;
}

.expense-summary li:last-child {
  border-bottom: none;
}
</style>
