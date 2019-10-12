import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home'),
      redirect: { name: 'billing' },
      children: [
        {
          path: '/billing',
          name: 'billing',
          component: () => import('./views/Billing'),
          meta: { title: '月記帳本', icon: 'el-icon-notebook-1' }
        },
        {
          path: '/account',
          name: 'account',
          component: () => import('./views/Account'),
          meta: { title: '帳戶管理', icon: 'el-icon-money' }
        },
        {
          path: '/charts',
          name: 'charts',
          component: () => import('./views/Charts'),
          meta: { title: '圖表分析', icon: 'el-icon-pie-chart' }
        },
        {
          path: '/answer',
          name: 'answer',
          component: () => import('./views/Answer'),
          meta: { title: '吃什麼', icon: 'el-icon-guide' }
        }
      ]
    }
  ]
})
