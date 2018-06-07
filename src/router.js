import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import SignIn from './components/User/SignIn.vue'
import DTLO from './components/dtlo.vue'
import Company from './components/Company/Company.vue'
import Companies from './components/Company/Companies.vue'
import AddCompany from './components/Company/AddCompany.vue'
import Dashboard from './components/User/Dashboard.vue'
import Profile from '@/components/User/Profile.vue'
import Search from './components/Company/Search.vue'
import AuthGuard from './auth-guard'

import SignUp from './components/User/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
	{
      path: '/dtlo',
      name: 'dtlo',
      component: DTLO
    },
    {
      path: '/companies',
      name: 'companies',
      component: Companies
    },
    {
      path: '/companies/:id',
      name: 'company',
      props: true,
      component: Company
    },
    {
      path: '/company/new',
      name: 'addcompany',
      component: AddCompany,
      beforeEnter: AuthGuard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: AuthGuard
    },
	
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/search/:sKey',
      name: 'Search',
      component: Search,
      props: true
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ],
  mode: 'history'
})
