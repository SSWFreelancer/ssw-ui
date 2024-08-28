import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";
import Dashboard from "../views/Dashboard.vue";
import FormLayout from "@/views/FormLayout.vue";
import Input from "@/views/Input.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "/formlayout",
        name: "formlayout",
        component: FormLayout,
      },
      {
        path: "/input",
        name: "input",
        component: Input,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
