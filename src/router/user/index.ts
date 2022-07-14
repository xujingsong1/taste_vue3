import type { RouteRecordRaw } from "vue-router";
import User from "@/components/User";
const route: RouteRecordRaw[] = [
  {
    path: "/order/view",
    name: "Order",
    component: User,
  },
];
export default route;
