import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import BookList from "../views/BookList.vue";
import BookDetails from "../views/BookDetails.vue"
import Dashboard from "../views/Dashboard.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/books", name: BookList, component: BookList },
  { path: "/bookdetails", name: BookDetails, component: BookDetails },
  { path: "/dashboard", name: Dashboard, component: Dashboard },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;