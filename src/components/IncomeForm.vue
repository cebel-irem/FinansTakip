<template>
  <div class="income-form">
    <h2>Gelir Ekle</h2>
    <form @submit.prevent="submitIncome">
      <div class="form-group">
        <label for="amount">Tutar:</label>
        <input 
          id="amount" 
          v-model="amount" 
          type="number" 
          placeholder="Tutar girin" 
          required 
          class="form-input"
        />
      </div>
      <div class="form-group">
        <label for="description">Açıklama (Opsiyonel):</label>
        <input 
          id="description" 
          v-model="description" 
          type="text" 
          placeholder="Açıklama girin" 
          class="form-input"
        />
      </div>
      <button type="submit" class="form-button">Ekle</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: '', // Gelir tutarı
      description: '', // Gelir açıklaması (opsiyonel)
    };
  },
  methods: {
    // Form gönderildiğinde çağrılan yöntem
    submitIncome() {
      if (!this.amount || this.amount <= 0) {
        alert('Lütfen geçerli bir tutar girin!');
        return;
      }

      const income = {
        id: Date.now(),
        amount: parseFloat(this.amount), // Gelir miktarını sayıya çevir
        description: this.description || 'Belirtilmedi', // Açıklama boşsa "Belirtilmedi" yaz
      };

      this.$emit('income-added', income); // Gelir eklendiğini ana bileşene bildir
      this.amount = ''; // Formu sıfırla
      this.description = '';
    },
  },
};
</script>

<style scoped>
/* Form Konteyneri */
.income-form {
  max-width: 400px;
  margin: 2em auto;
  padding: 1.5em;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Başlık */
.income-form h2 {
  text-align: center;
  color: #42b883;
  margin-bottom: 1.5em;
  font-size: 1.5rem;
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
  border-color: #42b883;
  outline: none;
}

/* Buton Stili */
.form-button {
  display: block;
  width: 100%;
  padding: 0.8em;
  font-size: 1rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #369e75;
}
</style>
