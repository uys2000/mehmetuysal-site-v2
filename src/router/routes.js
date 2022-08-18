export default [
  {
    path: "/",
    name: "animationLayout",
    component: () => import("@/layouts/animationLayout.vue"),
    children: [
      {
        path: "",
        name: "mainLayout",
        component: () => import("@/layouts/mainLayout.vue"),
      },
    ],
  },
];
