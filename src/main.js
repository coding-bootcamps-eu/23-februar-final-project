import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "@/assets/styles.css";

const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");
