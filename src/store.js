import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedComapanies: [
      {
        imageUrl: 'https://4k.com/wp-content/uploads/2014/10/NVidia_GeForce_Logo.jpg',
        id: 'sdjekrnennskd82382',
        title: 'NVIDIA',
        date: new Date(),
        location: 'London',
        description: 'Lorem ipsum dolor sit amet libero habitant ut cubilia. Id nemo nec. Vulputate perferendis posuere. Ornare odio turpis tincidunt sit nec enim vel ante hac mauris vivamus. Nisl velit consectetuer posuere fusce ac morbi penatibus amet fermentum lorem diam sapien consequat numquam. Aliquam phasellus ornare. Dui lacus mollis sem eget amet dignissim id consectetuer. Nulla gravida vehicula. Eget scelerisque sapien donec eros pellentesque. Gravida volutpat vivamus hac habitant mus. Nunc enim vivamus a auctor suspendisse. Suspendisse quis ut. Dictum malesuada hendrerit lorem diam ipsum. Lacus duis integer. Pretium scelerisque ipsum justo scelerisque justo. Eros laoreet cras. Scelerisque arcu urna laoreet.'
      },
      {
        imageUrl: 'https://scontent.fdel12-1.fna.fbcdn.net/v/t31.0-8/21368770_1737044779932164_2369230511019968127_o.jpg?_nc_cat=0&oh=6ab6e516915deb058a396c09a278a2af&oe=5B78D82B',
        id: 'afajfjadfaadfa323',
        title: 'FACETAGR',
        date: new Date(),
        location: 'New York',
        description: 'Lorem ipsum dolor sit amet libero habitant ut cubilia. Id nemo nec. Vulputate perferendis posuere. Ornare odio turpis tincidunt sit nec enim vel ante hac mauris vivamus. Nisl velit consectetuer posuere fusce ac morbi penatibus amet fermentum lorem diam sapien consequat numquam. Aliquam phasellus ornare. Dui lacus mollis sem eget amet dignissim id consectetuer. Nulla gravida vehicula. Eget scelerisque sapien donec eros pellentesque. Gravida volutpat vivamus hac habitant mus. Nunc enim vivamus a auctor suspendisse. Suspendisse quis ut. Dictum malesuada hendrerit lorem diam ipsum. Lacus duis integer. Pretium scelerisque ipsum justo scelerisque justo. Eros laoreet cras. Scelerisque arcu urna laoreet.'
      },
      {
        imageUrl: 'https://kcdn.indiabizclub.com/upload15/1ozqsuzqq4ax01qrt/banner/cover-hrv-banner-6816632845.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'IDCUBE',
        date: new Date(),
        location: 'Paris',
        description: 'Lorem ipsum dolor sit amet libero habitant ut cubilia. Id nemo nec. Vulputate perferendis posuere. Ornare odio turpis tincidunt sit nec enim vel ante hac mauris vivamus. Nisl velit consectetuer posuere fusce ac morbi penatibus amet fermentum lorem diam sapien consequat numquam. Aliquam phasellus ornare. Dui lacus mollis sem eget amet dignissim id consectetuer. Nulla gravida vehicula. Eget scelerisque sapien donec eros pellentesque. Gravida volutpat vivamus hac habitant mus. Nunc enim vivamus a auctor suspendisse. Suspendisse quis ut. Dictum malesuada hendrerit lorem diam ipsum. Lacus duis integer. Pretium scelerisque ipsum justo scelerisque justo. Eros laoreet cras. Scelerisque arcu urna laoreet.'
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
