const state = {
    incomes: [],
  };
  
  const mutations = {
    ADD_INCOME(state, income) {
      state.incomes.push(income);
    },
  };
  
  const actions = {
    addIncome({ commit }, income) {
      commit('ADD_INCOME', income);
    },
  };
  
  const getters = {
    allIncomes: (state) => state.incomes,
  };
  
  export default {
    state,
    mutations,
    actions,
    getters,
  };
  