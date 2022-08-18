export default [
  {
    path: "/",
    name: "animationLayout",
    component: () => import("@/layouts/animationLayout.vue"),
    children: [
      {
        path: "/",
        name: "mainLayout",
        component: () => import("@/layouts/mainLayout.vue"),
        children: [
          {
            path: "/",
            name: "homeView",
            component: () => import("@/views/homeView.vue"),
          },
        ],
      },
    ],
  },
];
