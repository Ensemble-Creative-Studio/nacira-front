import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Press from "../views/Press.vue";

const routes = [
  {
    mode: 'history',
    hash: false,
    routes:
  {
    path: "/",
    name: "Home", 
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/press",
    name: "Press",
    component: Press,
  },}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
