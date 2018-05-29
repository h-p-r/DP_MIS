<template lang="pug">
  v-app 
    v-toolbar.primary(dark)
      v-toolbar-side-icon.hidden-sm-and-up(@click='sideNav = !sideNav')
      v-toolbar-title
        router-link(to='/', tag='span', style='cursor: pointer') DP_MIS
      v-spacer
      v-layout(row='')
        v-flex
          v-text-field#search(color='white', name='input-1-3', placeholder='Search')
      v-btn(icon='')
        v-icon search
      v-toolbar-items.hidden-xs-only
        v-btn(flat='', v-for='item in menuItems', :key='item.title', :to='item.link')
          v-icon(left='', dark='') {{ item.icon }}
          |           {{ item.title }}
        v-menu(v-if='userIsAuthenticated',transition='slide-x-transition', bottom='', left)
          v-avatar.secondary.tl-avatar.ml-2(size='35px',color='white',slot='activator', dark='') 
            strong JD
          v-list
            v-list-tile.grey.lighten-3
              v-list-tile-title.text-xs-center John Doe
            v-divider
            v-list-tile(@click='onProfile')
              v-list-tile-title
                v-icon.mr-2 person
                | Profile
            v-list-tile(@click='onLogout')
              v-list-tile-title
                v-icon.mr-2 exit_to_app
                | Logout
    v-navigation-drawer(temporary='', absolute, v-model='sideNav')
      v-list.pa-1.grey.lighten-3(v-if='userIsAuthenticated')
        v-list-tile(avatar='')
          v-avatar.secondary.mr-3(size='40px',color='white',style='box-shadow: 0 0 0px 2px rgba(0,0,0,0.7); cursor: pointer', @click='onProfile') 
            strong JD
          v-list-tile-content
            v-list-tile-title John Doe
      v-divider(v-if='userIsAuthenticated')
      v-list
        v-list-tile(v-for='item in menuItems', :key='item.title', :to='item.link')
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content {{ item.title }}
        v-list-tile(v-if='userIsAuthenticated', @click='onLogout')
          v-list-tile-action
            v-icon exit_to_app
          v-list-tile-content Logout
    main
      router-view
    v-footer(height='auto')
      v-card.flex(flat='', tile='')
        v-card-title.grey.darken-3.white--text
          v-layout
            v-flex.pa-3(xs6='')
              strong.subheading Get connected with us on social networks!
            v-flex.text-xs-right(xs6='')
              v-btn.mx-3(v-for='icon in icons', :key='icon', icon='', dark='')
                v-icon(size='24px') {{ icon }}
        v-card-text.grey.lighten-3
          v-layout
            v-flex(v-for='(col, i) in rows', :key='i', xs4='')
              span.body-2(v-text='col.title.toUpperCase()')
              div.pa-1(v-for='(child, i) in col.children', :key='i', v-text='child')
            v-flex(xs4='', layout='', column='')
              span.body-2 CONTACT
              div
                v-icon.mr-3(size='18px') fas fa-home
                span New Delhi, Pin - 110002
              div
                v-icon.mr-3(size='18px') fas fa-envelope
                span  info@example.com
              div
                v-icon.mr-3(size='18px') fas fa-phone
                span + 01 234 567 88
              div
                v-icon.mr-3(size='18px') fas fa-print
                span + 01 234 567 89
        v-card-actions.grey.lighten-2.justify-center
          | ©2018 — 
          strong Delhi Police
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-instagram'],
        rows: [
          {
            title: 'DP_MIS',
            children: ['Information Management System']
          },
          {
            title: 'Useful Links',
            children: ['Link 1', 'Link 2', 'Link 3', 'About Us']
          }
        ]
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'store', title: 'Companies', link: '/companies'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'supervisor_account', title: 'Dashboard', link: '/dashboard'},
            {icon: 'store', title: 'Companies', link: '/companies'},
            {icon: 'room', title: 'Add Company', link: '/company/new'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        // return false;
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
        this.$router.push('/')
      },
      onProfile() {
        this.$router.push('/profile')
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

  .tl-avatar {
    position: relative
    top: 50%
    transform: translateY(-50%)
    box-shadow: 0 0 0px 2px rgba(255,255,255,0.8)
  }
</style>
