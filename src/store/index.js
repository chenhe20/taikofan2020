import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dlcPackList: [],
    dlcPackListByDate: [],
    dlcPackListByPrice: [],
    dlcPackListByGenre: [],
    baseSongList: [],
    allSongList: [],
    dlcSongList: [],
    mvType: 'youtube'
  },
  mutations: {
    getDlcPackList (state, res) {
      state.dlcPackList = res
    },
    getDlcPackListByDate (state, res) {
      state.dlcPackListByDate = res
    },
    getDlcPackListByPrice (state, res) {
      state.dlcPackListByPrice = res
    },
    getDlcPackListByGenre (state, res) {
      state.dlcPackListByGenre = res
    },
    getBaseSongList (state, res) {
      state.baseSongList = res
    },
    getDlcSongList (state, res) {
      state.dlcSongList = res
    },
    getAllSongList (state, res) {
      state.allSongList = res
    },
    changeMvType (state, type) {
      state.mvType = type
    }
  },
  actions: {
    getDlcPackList (context) {
      axios.get('http://35.201.202.127:8081/taikoSong/dlc-pack').then(res => {
        context.commit('getDlcPackList', res.data)
        // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        console.log('error')
      })
    },
    getDlcPackListByDate (context) {
      axios.get('http://35.201.202.127:8081/taikoSong/dlc-pack/date').then(res => {
        context.commit('getDlcPackListByDate', res.data)
        // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        console.log('error')
      })
    },
    getDlcPackListByPrice (context) {
      axios.get('http://35.201.202.127:8081/taikoSong/dlc-pack/price').then(res => {
        context.commit('getDlcPackListByPrice', res.data)
        // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        console.log('error')
      })
    },
    getDlcPackListByGenre (context) {
      axios.get('http://35.201.202.127:8081/taikoSong/dlc-pack/genre').then(res => {
        context.commit('getDlcPackListByGenre', res.data)
        // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        console.log('error')
      })
    },
    getBaseSongList (context) {
      axios.get('http://35.201.202.127:8081/taikoSong/base').then(res => {
        context.commit('getBaseSongList', res.data)
        // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        console.log('error')
      })
    },
    getDlcSongList (context) {
      axios.get('http://35.201.202.127:8081/taikoSong/dlc').then(res => {
        context.commit('getDlcSongList', res.data)
        // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        console.log('error')
      })
    },
    getAllSongList (context) {
      axios.get('http://35.201.202.127:8081/taikoSong/all').then(res => {
        context.commit('getAllSongList', res.data)
        // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        console.log('error')
      })
    }
  },
  modules: {
  }
})
