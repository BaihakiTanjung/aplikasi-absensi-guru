import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import AUTH_SERVICE from "@/services/auth";

const routes: Array<RouteRecordRaw> = [
  // DEFAULT LAYOUT
  {
    path: "",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("@/views/home.vue"),
      },
      {
        name : "report",
        path : "/report",
        component : () => import("@/views/admin/report.vue")
      },
      {
        name : "user",
        path : "/user",
        component : () => import("@/views/admin/user.vue")
      },
      {
        name : "attendance",
        path : "/attendance",
        component : () => import("@/views/user/attendance.vue")
      },
      {
        name : "profile",
        path : "/profile",
        component : () => import("@/views/user/profile.vue")
      },
    ],
  },

  // BLANK LAYOUT
  {
    path: "",
    component: () => import("@/layouts/blank.vue"),
    children: [
      {
        name: "blank",
        path: "/blank",
        component: () => import("@/views/blank.vue"),
      },
      {
        name: "login",
        path: "/login",
        component: () => import("@/views/login.vue"),
      },
    ],
  },

  // NOT FOUND
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to : any, from, next) => {
  const token = localStorage.getItem("auth_token");
  const authPath = ["login", "register"].includes(to.name);
  if (token) {
    const res = await AUTH_SERVICE.me();
    if (res) {
      if (authPath) next("/");
      else next();
    }
    else {
      localStorage.setItem("auth_token", "");
      next("/login");
    }
  } else {
    if (authPath) next();
    else next("/login");
  }
})

export default router;
