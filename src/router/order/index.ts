import type { RouteRecordRaw } from "vue-router";
import Order from "Components/Order";
const route: RouteRecordRaw[] = [
  {
    path: "/order/view",
    name: "Order",
    component: Order,
  },
];
export default route;
