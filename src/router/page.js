let pageroutes = [
  {
    path: "/hicategories/hi",
    component: () => import('../posts/hi.md')
  },
  {
    path: "hi",
    component: () => import('../posts/hi.md')
  },
  {
    path: "/hitags/hi",
    component: () => import('../posts/hi.md')
  },
  {
    path: "/testcategories/test",
    component: () => import('../posts/test.md')
  },
  {
    path: "test",
    component: () => import('../posts/test.md')
  },
  {
    path: "/testtags/test",
    component: () => import('../posts/test.md')
  }]
export default pageroutes