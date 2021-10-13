import * as Vue from "vue";
import "./assets/general-style.css";
import App from "./App.vue";
import router from "./router";
import ScrollAnimation from "./directives/scrollAnimation";
const app = Vue.createApp(App);

app.directive("scrollanimation", ScrollAnimation);
app.use(router).mount("#app");
