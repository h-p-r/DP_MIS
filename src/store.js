import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedCompanies: [
      {
        logoUrl: 'https://scontent.fdel12-1.fna.fbcdn.net/v/t31.0-8/21368770_1737044779932164_2369230511019968127_o.jpg?_nc_cat=0&oh=6ab6e516915deb058a396c09a278a2af&oe=5B78D82B',
        imageUrl: 'https://scontent.fdel12-1.fna.fbcdn.net/v/t31.0-8/21368770_1737044779932164_2369230511019968127_o.jpg?_nc_cat=0&oh=6ab6e516915deb058a396c09a278a2af&oe=5B78D82B',
        id: 'afajfjadfaadfa323',
        cname: 'Facetagr',
        date: new Date(),
        tags: ['uno','dos','tres'],
        location: 'New York',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia itaque consectetur accusamus enim. Eos, accusantium voluptatibus expedita nemo sequi fugiat! Dolorum dignissimos repudiandae nesciunt molestiae soluta quo dolores. Quidem.'
      },
      {
        imageUrl: 'https://kcdn.indiabizclub.com/upload15/1ozqsuzqq4ax01qrt/banner/cover-hrv-banner-6816632845.jpg',
        id: 'aadsfhbkhlk1241',
        cname: 'IDCUBE',
        date: new Date(),
        tags: ['uno','dos','tres'],
        location: 'Paris',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia itaque consectetur accusamus enim. Eos, accusantium voluptatibus expedita nemo sequi fugiat! Dolorum dignissimos repudiandae nesciunt molestiae soluta quo dolores. Quidem.'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedCompanies (state, payload) {
      state.loadedCompanies = payload
    },
    addCompany (state, payload) {
      state.loadedCompanies.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadCompanies ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('companies').once('value')
        .then((data) => {
          const companies = []
          const obj = data.val()
          for (let key in obj) {
            companies.push({
              id: key,
              cname: obj[key].cname,
              location: obj[key].location,
              logoUrl: obj[key].logoUrl,
              about: obj[key].about,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              tags: obj[key].tags,
              contacts: obj[key].contacts,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedCompanies', companies)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    addCompany ({commit, getters}, payload) {
      const company = {
        cname: payload.cname,
        location: payload.location,
        logoUrl: payload.logoUrl,
        imageUrl: payload.imageUrl,
        about: payload.about,
        description: payload.description,
        date: payload.date.toISOString(),
        tags: payload.tags,
        contacts: payload.contacts,
        creatorId: getters.user.id
      }
      firebase.database().ref('companies').push(company)
        .then((data) => {
          const key = data.key
          commit('addCompany', {
            ...company,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    sendRequest({commit}, payload) {
      console.log(payload)
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredCompanies: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredCompanies: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, registeredCompanies: []})
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedCompanies (state) {
      return state.loadedCompanies.sort((companyA, companyB) => {
        return companyA.date > companyB.date
      })
    },
    featuredCompanies (state, getters) {
      return getters.loadedCompanies.slice(0, 5)
    },
    loadedCompany (state) {
      return (companyId) => {
        return state.loadedCompanies.find((company) => {
          return company.id === companyId
        })
      }
    },
    searchlist (state) {
      if(state.loadedCompanies != null) {
        var sList=[]
        
        for(let company of state.loadedCompanies) {
          sList.push(company.cname)
      
          for(let tag of company.tags) {
            sList.push(tag)
          }
        }
        return sList
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
