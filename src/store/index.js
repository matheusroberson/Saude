import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    cpf: "",
    cel: "",
    state: null,
    city: null,
    specialty: null,
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
    getFirstStep: (state) =>
      // state.name !== "" &&
      state.name.length >= 3 &&
      state.name.length <= 48 &&
      // state.cpf !== "" &&
      state.cpf.length === 14 &&
      state.city !== null &&
      state.state !== null &&
      // state.cel !== "" &&
      state.cel.length === 16
        ? true
        : false,
    getLastStep: (state) =>
      state.specialty !== null &&
      state.price <= 350.0 &&
      state.price >= 30.0 &&
      state.payment.length > 0 &&
      state.payment.filter((item) => item.trim() === "Cartão de crédito")
        .length === 0
        ? true
        : false,
  },
});
