export default [
  {
    path: "/",
    name: "homeLayout",
    component: () => import("@/layouts/mainLayout.vue"),
    children: [
      {
        path: "/",
        name: "homeView",
        component: () => import("@/views/homeView.vue"),
      },
    ],
  },
];
