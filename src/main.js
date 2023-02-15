import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap/dist/js/bootstrap.js";

//Styles
//import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";

//Create VUE 3 app
const app = createApp(App);

//Use Plugins
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

//Mount App
app.mount("#app");
