import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    cpf: "",
    cel: "",
    state: null,
    city: "",
    specialty: "",
    price: 0,
    payment: [],
  },

  mutations: {
    setCurrentData(state, payload) {
      Object.keys(payload).forEach((key) => {
        Vue.set(state, key, payload[key]);
      });
    },
  },

  actions: {
    setCurrentData: ({ commit }, data) => commit("setCurrentData", data),
  },

  getters: {
    getCurrentData: (state) => state,
  },
});
