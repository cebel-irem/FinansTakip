const state = {
    incomes: [], // Gelirleri tutacak bir dizi
  };
  
  const mutations = {
    ADD_INCOME(state, income) {
      state.incomes.push(income); // Yeni gelir bilgisini ekle
    },
  };
  
  const actions = {
    addIncome({ commit }, income) {
      commit('ADD_INCOME', income); // Mutation'ı tetikleyerek gelir ekle
    },
  };
  
  const getters = {
    allIncomes: (state) => state.incomes, // Tüm gelirleri döndür
    totalIncome: (state) =>
      state.incomes.reduce((total, income) => total + income.amount, 0), // Toplam geliri hesapla
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  