import order from "./order";
import user from "./user";
import type { RouteRecordRaw } from "vue-router";
import BasicLayout from "../components/BasicLayout";

const baseRouter: RouteRecordRaw = {
  path: "/",
  component: BasicLayout,
  meta: { lable: "首页" },
  redirect: "/index",
  children: [...order, ...user],
};
export default baseRouter;
