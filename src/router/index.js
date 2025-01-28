import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Income from "../views/Income.vue";
import Expenses from "../views/Expenses.vue";

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/income", name: "Income", component: Income },
  { path: "/expenses", name: "Expenses", component: Expenses },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
