import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import colors from 'vuetify/es5/util/colors'
import wysiwyg from 'vue-wysiwyg'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/Alert.vue'

import './registerServiceWorker'
// import 'vuetify/dist/vuetify.min.css'

Vue.use(wysiwyg, {
  maxHeight: "500px"
}); // config is optional

Vue.component('app-alert', AlertCmp)

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken2,
    accent: colors.blue.accent2,
    secondary: colors.grey.lighten1,
    info: colors.yellow.darken2,
    warning: colors.amber.darken2,
    error: colors.red.accent4,
    success: colors.green.lighten2
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyAy7Wwvs0mzZJ9FMQIIT7UO9So-YLICTlA",
      authDomain: "dp-mis.firebaseapp.com",
      databaseURL: "https://dp-mis.firebaseio.com",
      projectId: "dp-mis",
      storageBucket: "dp-mis.appspot.com",
      messagingSenderId: "341705074062"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadCompanies')
  }
})
