import Vue from 'vue'
import Router from 'vue-router'
import pageroutes from './page'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/post',
      name: 'PostLayout',
      component: () => import('@/views/Layout'),
      children: [
        ...pageroutes
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/views/404')
    }
  ]
})
