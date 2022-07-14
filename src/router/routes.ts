import baseRouter from "./base.router";

import BasicLayout from "../components/BasicLayout";
import Login from "../pages/Login";


const routes = [
  {
    path: "/",
    name: 'index',
    component: BasicLayout,
    meta: { label: "首页" },
    redirect: "/index",
    children: [...baseRouter],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { label: '登陆' }
  }
];

export default routes;
