import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Companies from '@/components/Companies'
import CreateCompany from '@/components/CreateCompany'
import Profile from '@/components/Profile'
import Signup from '@/components/Signup'
import Signin from '@/components/SignIn'
import Company from '@/components/Company'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/companies',
      name: 'Companies',
      component: Companies
    },
    {
      path: '/company/new',
      name: 'CreateCompany',
      component: CreateCompany,
      beforeEnter: AuthGuard
    },
    {
      path: '/companies/:id',
      name: 'Company',
      props: true,
      component: Company
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
