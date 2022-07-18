import type { RouteRecordRaw } from "vue-router";
import User from "@/components/User";
const route: RouteRecordRaw[] = [
  {
    path: "/user/view",
    name: "user",
    component: User,
  },
];
export default route;
