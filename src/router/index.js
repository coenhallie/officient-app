import Vue from 'vue'
import Router from 'vue-router'
import EmployeeList from '@/components/EmployeeList'
import EmployeeDetails from '@/components/EmployeeDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'EmployeeList',
      component: EmployeeList,
      props: {name: 'avatar'}
    },
    {
      path: '/details/:id',
      name: 'EmployeeDetails',
      component: EmployeeDetails
    }
  ]
})
