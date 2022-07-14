import order from "./order";
import user from "./user";
import type { RouteRecordRaw } from "vue-router";

const baseRouter: RouteRecordRaw[] = [...order, ...user];
export default baseRouter;
