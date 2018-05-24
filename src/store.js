import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedComapanies: [
      {
        imageUrl: 'https://scontent.fdel12-1.fna.fbcdn.net/v/t31.0-8/21368770_1737044779932164_2369230511019968127_o.jpg?_nc_cat=0&oh=6ab6e516915deb058a396c09a278a2af&oe=5B78D82B',
        id: 'afajfjadfaadfa323',
        title: 'Facetagr',
        date: new Date(),
        location: 'New York',
        description: 'New York, New York!'
      },
      {
        imageUrl: 'https://kcdn.indiabizclub.com/upload15/1ozqsuzqq4ax01qrt/banner/cover-hrv-banner-6816632845.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'IDCUBE',
        date: new Date(),
        location: 'Paris',
        description: 'It\'s Paris!'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    loadedComapanies (state) {
      return state.loadedComapanies.sort((companyA, companyB) => {
        return companyA.date > companyB.date
      })
    },
    featuredCompanies (state, getters) {
      return getters.loadedComapanies.slice(0, 5)
    },
    loadedCompany (state) {
      return (companyId) => {
        return state.loadedComapanies.find((company) => {
          return company.id === companyId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
