import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/users/login'
import Register from '@/pages/users/register'
import Tips from '@/components/tips'
import Forget from '@/pages/users/forget'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
		{
		  path: '/register',
		  name: 'register',
		  component: Register
		},
		{
		  path: '/tips',
		  name: 'tips',
		  component: Tips
		},
		{
		  path: '/forget',
		  name: 'forget',
		  component: Forget
		}
  ]
})
