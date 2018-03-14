import Vue from 'vue'
import Router from 'vue-router'
import EmployeeDetails from '@/components/Layout/EmployeeDetails'
import Home from '@/components/Layout/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/details/:id',
      name: 'EmployeeDetails',
      component: EmployeeDetails
    }
  ]
})
