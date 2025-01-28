<template>
    <div class="expenses-page">
      <!-- Sayfa Başlığı -->
      <h1>Giderler</h1>
  
      <!-- Yeni Gider Ekleme Formu -->
      <ExpenseForm @expense-added="addExpenseToStore" />
  
      <!-- Gider Listesi -->
      <div class="expense-list">
        <h2>Eklenen Giderler</h2>
        <ul>
          <li v-for="expense in expenses" :key="expense.id">
            {{ expense.description }} - {{ expense.category }} - {{ expense.amount }}₺
          </li>
        </ul>
        <h3>Toplam Gider: {{ totalExpense }}₺</h3>
      </div>
    </div>
  </template>
  
  <script>
  import ExpenseForm from "../components/ExpenseForm.vue";
  import { mapGetters, mapActions } from "vuex";
  
  export default {
    components: {
      ExpenseForm, // Gider ekleme formu bileşeni
    },
    computed: {
      // Vuex state'ten gider listesini ve toplam gideri al
      ...mapGetters({
        expenses: "allExpenses", // Tüm giderler
        totalExpense: "totalExpense", // Toplam gider
      }),
    },
    methods: {
      // Vuex action'ını tetikleyerek gider ekle
      ...mapActions(["addExpense"]),
      addExpenseToStore(expense) {
        this.addExpense(expense); // Formdan gelen veriyi Vuex'e ekle
      },
    },
  };
  </script>
  
  <style scoped>
  .expenses-page {
    padding: 1rem;
  }
  
  .expense-list {
    margin-top: 2rem;
  }
  </style>
  