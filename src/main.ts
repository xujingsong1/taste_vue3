import { createApp } from "vue";
import App from "./App.vue";
import bootRouter from "./router";

async function bootApp() {
  const app = createApp(App);
  bootRouter(app);
  app.mount("#app");
}

bootApp();


