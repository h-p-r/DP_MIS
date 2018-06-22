import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)
var stopwords=["a","a's","able","about","above","according","accordingly","across","actually","after","afterwards","again","against","ain't","all","allow","allows","almost","alone","along","already","also","although","always","am","among","amongst","an","and","another","any","anybody","anyhow","anyone","anything","anyway","anyways","anywhere","apart","appear","appreciate","appropriate","are","aren't","around","as","aside","ask","asking","associated","at","available","away","awfully","b","be","became","because","become","becomes","becoming","been","before","beforehand","behind","being","believe","below","beside","besides","best","better","between","beyond","both","brief","but","by","c","c'mon","c's","came","can","can't","cannot","cant","cause","causes","certain","certainly","changes","clearly","co","com","come","comes","concerning","consequently","consider","considering","contain","containing","contains","corresponding","could","couldn't","course","currently","d","definitely","described","despite","did","didn't","different","do","does","doesn't","doing","don't","done","down","downwards","during","e","each","edu","eg","eight","either","else","elsewhere","enough","entirely","especially","et","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","f","far","few","fifth","first","five","followed","following","follows","for","former","formerly","forth","four","from","further","furthermore","g","get","gets","getting","given","gives","go","goes","going","gone","got","gotten","greetings","h","had","hadn't","happens","hardly","has","hasn't","have","haven't","having","he","he's","hello","help","hence","her","here","here's","hereafter","hereby","herein","hereupon","hers","herself","hi","him","himself","his","hither","hopefully","how","howbeit","however","i","i'd","i'll","i'm","i've","ie","if","ignored","immediate","in","inasmuch","inc","indeed","indicate","indicated","indicates","inner","insofar","instead","into","inward","is","isn't","it","it'd","it'll","it's","its","itself","j","just","k","keep","keeps","kept","know","known","knows","l","last","lately","later","latter","latterly","least","less","lest","let","let's","like","liked","likely","little","look","looking","looks","ltd","m","mainly","many","may","maybe","me","mean","meanwhile","merely","might","more","moreover","most","mostly","much","must","my","myself","n","name","namely","nd","near","nearly","necessary","need","needs","neither","never","nevertheless","new","next","nine","no","nobody","non","none","noone","nor","normally","not","nothing","novel","now","nowhere","o","obviously","of","off","often","oh","ok","okay","old","on","once","one","ones","only","onto","or","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","own","p","particular","particularly","per","perhaps","placed","please","plus","possible","presumably","probably","provides","q","que","quite","qv","r","rather","rd","re","really","reasonably","regarding","regardless","regards","relatively","respectively","right","s","said","same","saw","say","saying","says","second","secondly","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sensible","sent","serious","seriously","seven","several","shall","she","should","shouldn't","since","six","so","some","somebody","somehow","someone","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specified","specify","specifying","still","sub","such","sup","sure","t","t's","take","taken","tell","tends","th","than","thank","thanks","thanx","that","that's","thats","the","their","theirs","them","themselves","then","thence","there","there's","thereafter","thereby","therefore","therein","theres","thereupon","these","they","they'd","they'll","they're","they've","think","third","this","thorough","thoroughly","those","though","three","through","throughout","thru","thus","to","together","too","took","toward","towards","tried","tries","truly","try","trying","twice","two","u","un","under","unfortunately","unless","unlikely","until","unto","up","upon","us","use","used","useful","uses","using","usually","uucp","v","value","various","very","via","viz","vs","w","want","wants","was","wasn't","way","we","we'd","we'll","we're","we've","welcome","well","went","were","weren't","what","what's","whatever","when","whence","whenever","where","where's","whereafter","whereas","whereby","wherein","whereupon","wherever","whether","which","while","whither","who","who's","whoever","whole","whom","whose","why","will","willing","wish","with","within","without","won't","wonder","would","wouldn't","x","y","yes","yet","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves","z","zero"]

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
    error: null,
    dtloReq: null
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
    setDtloReq(state, payload) {
      state.dtloReq = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    clearDtloReq (state) {
      state.dtloReq = null
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
      commit('setDtloReq', payload)
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
    },
    clearDtloReq ({commit}) {
      commit('clearDtloReq')
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

          let regex = /(<([^>]+)>)/ig
          let input=company.description.replace(regex, ' ').toLowerCase()
          input=input.replace(/\s\s+/g,' ')

          if (!Array.isArray(input)) {
            // Lazy tokenization by whitespace
            input = input.split(' ');
            sList.push(...input.filter(function (word) {
                return !(stopwords.indexOf(word) > 0)
            }));
          } else {
            sList.push(...input.filter(function (word) {
                return !(stopwords.indexOf(word) > 0)
            }));
          }
        }

        let setList = new Set(sList)
        sList = Array.from(setList)
        
        return sList
      }
    },
    dtloSearchRes (state, getters) {
      if(state.dtloReq==null)
        return
      
      var req = state.dtloReq.req
      
      //  creating search keywords
      var sList=[]

      // let regex = /(<([^>]+)>)/ig
      // let input=req.replace(regex, ' ').toLowerCase()
      let input = req.toLowerCase()
      // console.log(input);
      
      input=input.replace(/\s\s+/g,' ')

      if (!Array.isArray(input)) {
        // Lazy tokenization by whitespace
        input = input.split(' ');
        sList.push(...input.filter(function (word) {
            return !(stopwords.indexOf(word) > 0)
        }));
      } else {
        sList.push(...input.filter(function (word) {
            return !(stopwords.indexOf(word) > 0)
        }));
      }
      
      // console.log(sList);
      

      //  creating search results
      return getters.loadedCompanies.filter( (company)=> {
        
        let sArr=[]
        let regex = /(<([^>]+)>)/ig
        let des = company.description.replace(regex, ' ').toLowerCase()
        des=des.replace(/\s\s+/g,' ')
        
        sArr.push(
          company.cname.toLowerCase(),
          ...des.split(' ')
        )
        
        for(let tag of company.tags) {
          sArr.push(tag.toLowerCase())
        }
        
        
        // console.log(sArr);
        
        return sList.some(function (sKey) {
          return sArr.indexOf(sKey) >= 0;
        })
      })
      
    },  
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    dtloReq(state) {
      return state.dtloReq
    }
  }
})
