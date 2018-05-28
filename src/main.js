import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import colors from 'vuetify/es5/util/colors'
import wysiwyg from 'vue-wysiwyg'
import * as firebase from 'firebase'
import AlertCmp from './components/Alert.vue'

import './registerServiceWorker'
// import 'vuetify/dist/vuetify.min.css'

Vue.use(wysiwyg, {}); // config is optional. more below

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB64EluFE_XE8TNCLHmGV1BbLxGmurwevY',
      authDomain: 'dp-mis-fb690.firebaseapp.com',
      databaseURL: 'https://dp-mis-fb690.firebaseio.com',
      projectId: 'dp-mis-fb690',
      storageBucket: 'dp-mis-fb690.appspot.com'

    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadCompanies')
  }
})
