const state = {
  expenses: [], // Giderlerin tutulduğu liste
};

const mutations = {
  ADD_EXPENSE(state, expense) {
    state.expenses.push(expense); // Yeni bir gider ekle
  },
};

const actions = {
  addExpense({ commit }, expense) {
    commit('ADD_EXPENSE', expense); // Gider ekleme işlemi
  },
};

const getters = {
  allExpenses: (state) => state.expenses, // Tüm giderleri getir
  totalExpense: (state) =>
    state.expenses.reduce((total, expense) => total + expense.amount, 0), // Toplam gideri hesapla
};

export default {
  state,
  mutations,
  actions,
  getters,
};
