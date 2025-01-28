import { createStore } from 'vuex';
import income from './modules/income';
import expense from './modules/expense';

export default createStore({
  modules: {
    income,
    expense,
  },
});
