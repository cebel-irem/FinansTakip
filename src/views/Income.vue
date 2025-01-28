<!-- Gelir sayfasi-->
 <template>
    <div class="income-page">
        <!-- Sayfa Başlığı-->
        <h1>Gelirler</h1>

         <!-- Yeni Gelir Ekleme Formu -->
        <IncomeForm @income-added="addIncomeToStore"/>

        <!-- Gelir Listesi-->
        <div class="income-list">
            <h2>Eklenen Gelirler</h2>
            <ul>
                <li v-for="income in incomes" :key="income.id">
                    {{ income.description }} - {{ income.amount }}₺
                </li>
            </ul>
            <h3>Toplam Gelir: {{ totalIncome }}₺</h3>
        </div>

    </div>
 </template>

<script>
import IncomeForm from "../components/IncomeForm.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    IncomeForm, // Gelir ekleme formu bileşeni
  },
  computed: {
    ...mapGetters({
      incomes: "allIncomes", // Tüm gelirler
      totalIncome: "totalIncome", // Toplam gelir
    }),
  },
  methods: {
    // Vuex action'ını tetikleyerek gelir ekle
    ...mapActions(["addIncome"]),
    addIncomeToStore(income) {
      this.addIncome(income); // Formdan gelen veriyi Vuex'e ekle
    },
  },
};
</script>

<style scoped>
.income-page {
  padding: 1rem;
}

.income-list {
  margin-top: 2rem;
}
</style>