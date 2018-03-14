import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let token = {
  headers: {
    Authorization: 'Bearer 097950381af758d7efc6409e4b0a548eaf23f7db'
  }
}

const header = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'text'
  }
}

const store = new Vuex.Store({
  state: {
    employeedetails: {},
    employeename: '',
    employeeaddress: {},
    employeerole: {},
    employeecity: {},
    employees: [],
    avatar: {},
    assets: {},
    wages: {},
    totalduration: 'No data available',
    totaldistance: 'No data available',
    googledata: {},
    loading: false
  },
  actions: {
    LOAD_EMPLOYEE_DETAILS: async function ({ commit, dispatch }) {
      store.state.loading = true
      await axios.get(`/api/people/${store.state.route.params.id}/detail`, token).then(
        response => {
          const payload = {
            employeedetails: response.data.data,
            avatar: response.data.data.avatar,
            employeeaddress: response.data.data.address.line_1.split(' ').join('+'),
            employeecity: response.data.data.address.city.split(' ').join('+'),
            employeerole: response.data.data.current_role.name
          }
          commit('SET_EMPLOYEE_DETAILS', payload)
          dispatch('LOAD_GOOGLE_API', payload)
          console.log('loading??', store.state.loading)
          store.state.loading = false
        },
        err => {
          console.log('load employee data error', err)
        }
      )
    },
    LOAD_EMPLOYEE_LIST: async function ({ commit }) {
      await axios.get('/api/people/list?page=0', token).then(
        response => {
          commit('SET_EMPLOYEE_LIST', {
            employees: response.data.data
          })
        },
        err => {
          console.log('load employee list error', err)
        }
      )
    },
    LOAD_GOOGLE_API: async function ({ commit }, payload) {
      await axios
        .get(
          `/travel/json?origin=${payload.employeeaddress}+${payload.employeecity}&destination=Kortrijksesteenweg+181+b9000+gent&departure_time=1522649227&key=AIzaSyBP5X7pDvAr4Z_q76O4BmCNjCtuFy6SUY0`, header)
        .then(
          response => {
            commit('SET_GOOGLE_API', {
              googledata: response.data.routes[0].legs[0].steps,
              totalduration: response.data.routes[0].legs[0].duration.text,
              totaldistance: response.data.routes[0].legs[0].distance.text
            })
          },
          err => {
            console.log('load google api error', err)
          }
        )
    },
    LOAD_ASSET_DATA: async function ({ commit }) {
      await axios.get('/api/assets/list', token).then(
        response => {
          commit('SET_ASSET_DATA', {
            assets: response.data.data
          })
        },
        err => {
          console.log('load asset data error', err)
        }
      )
    },
    LOAD_WAGE_DATA: async function ({ commit }) {
      await axios.get(`/api/wages/${store.state.route.params.id}/current`, token).then(
        response => {
          commit('SET_WAGE_DATA', {
            wages: response.data.data
          })
        },
        err => {
          console.log('load wage data error', err)
        }
      )
    }
  },
  mutations: {
    SET_EMPLOYEE_LIST (state, { employees }) {
      state.employees = employees
    },
    SET_EMPLOYEE_DETAILS (state, { employeedetails, employeeaddress, avatar, employeerole, employeecity }) {
      state.employeedetails = employeedetails
      state.employeeaddress = employeeaddress
      state.employeecity = employeecity
      state.employeerole = employeerole
      state.avatar = avatar
    },
    SET_GOOGLE_API (state, { googledata, totalduration, totaldistance, status }) {
      state.googledata = googledata
      state.totalduration = totalduration
      state.totaldistance = totaldistance
      state.status = status
    },
    SET_ASSET_DATA (state, { assets }) {
      state.assets = assets
    },
    SET_WAGE_DATA (state, { wages }) {
      state.wages = wages
    }
  }
})
export default store
