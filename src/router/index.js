import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Attendance from "../views/Attendance.vue";
import Revision from "../views/Revision.vue";
import Conclusion from "../views/Conclusion.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/attendance",
    name: "Attendance",
    component: Attendance,
  },
  {
    path: "/revision",
    name: "Revision",
    component: Revision,
  },
  {
    path: "/conclusion",
    name: "Conclusion",
    component: Conclusion,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
