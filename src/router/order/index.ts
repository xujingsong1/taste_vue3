import type { RouteRecordRaw } from "vue-router";
import Order from "../../components/Order";
const route: RouteRecordRaw[] = [
  {
    path: "/order/view",
    name: "order",
    component: Order,
  },
];
export default route;
