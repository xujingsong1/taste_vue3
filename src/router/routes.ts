import baseRouter from "./base.router";

import BasicLayout from "../components/BasicLayout";

const routes = [
  {
    path: "/",
    component: BasicLayout,
    meta: { label: "首页" },
    redirect: "/index",
    children: [...baseRouter],
  },
];

export default routes;
