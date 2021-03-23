import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: [],
    freeposts: [],
    proposts: []
  },
  getters: {
    STATUS(state) {
      return state.status
    },
    FREEPOSTS(state) {
      return state.freeposts
    },
    PROPOSTS(state) {
      return state.proposts
    }
  },
  actions: {
    GET_STATUS({commit}) {
      return axios.get('http://localhost:3000/status')
      .then((status) => {
        commit('SET_STATUS', status.data)
      })
    },
    EDIT_STATUS() {
      return axios.put('http://localhost:3000/status', { status: true } )
    },
    EDIT_STATUS2() {
      return axios.put('http://localhost:3000/status', { status: false } )
    },
    GET_FREEPOSTS({commit}) {
      return axios.get('http://localhost:3000/freeposts')
      .then((freeposts) => {
        commit('SET_FREEPOSTS', freeposts.data)
      })
    },
    EDIT_FREEPOST({}, savePost) {
      return axios.put('http://localhost:3000/freeposts/'+ savePost.id , { 
        title: savePost.title, 
        descrition: savePost.descrition 
      })
    },
    DELETE_FREEPOST({}, deletePost) {
      return axios.delete('http://localhost:3000/freeposts/' + deletePost.id)
    },
    ADD_NEW_FREEPOST({}, addPost) {
      return axios.post('http://localhost:3000/freeposts', addPost)
    },
    GET_PROPOSTS({commit}) {
      return axios.get('http://localhost:3000/proposts')
      .then((proposts) => {
        commit('SET_PROPOSTS', proposts.data)
      })
    },
    DELETE_PROPOST({}, deleteProPost) {
      return axios.delete('http://localhost:3000/proposts/' + deleteProPost.id)
    },
    EDIT_PROPOST({}, saveProPost) {
      return axios.put('http://localhost:3000/proposts/'+ saveProPost.id, { 
        title: saveProPost.title, 
        lists: saveProPost.lists
      })
    },
    EDIT_PROPOST_ACTIV({}, edit) {
      return axios.put('http://localhost:3000/proposts/'+ edit.id, { 
        title: edit.title, 
        lists: edit.lists
      })
    },
    ADD_NEW_PROPOST({}, addProPost) {
      return axios.post('http://localhost:3000/proposts', addProPost)
    }
  },
  mutations: {
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_FREEPOSTS: (state, freeposts) => {
      state.freeposts = freeposts;
    },
    SET_PROPOSTS: (state, proposts) => {
      state.proposts = proposts;
    }
  }
})
