import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import type { RouteRecordRaw } from "vue-router";
import type { App } from "vue";

const router = createRouter({
  history: createWebHistory(),
  routes: routes as unknown as RouteRecordRaw[],
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !)
  next();
});

export default async function (app: App<Element>) {
  app.use(router);
}
