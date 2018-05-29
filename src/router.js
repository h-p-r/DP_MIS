import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'
import Company from './components/Company.vue'
import Companies from './components/Companies.vue'
import AddCompany from './components/AddCompany.vue'
import Dashboard from './components/Dashboard.vue'
import Profile from '@/components/Profile'
import AuthGuard from './auth-guard'

import SignUp from './components/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
