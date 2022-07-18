import type { RouteRecordRaw } from "vue-router";
import Login from "../pages/Login";
const configRouter: RouteRecordRaw = {
  path: "/login",
  component: Login,
  meta: { lable: "登录" },
};
export default configRouter;
