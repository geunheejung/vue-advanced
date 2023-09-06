import Vuex from "vuex";
import { fetchUserData, fetchIndividualItem, fetchData } from "../api";
import Vue from "vue";

Vue.use(Vuex);

export const types = {
  FETCH_USER_DATA: "FETCH_USER_DATA",
  FETCH_INDIVIDUAL_ITEM: "FETCH_INDIVIDUAL_ITEM",
  SET_DATA: "SET_DATA",
  FETCH_DATA: "FETCH_DATA",
};

const getters = {};

const mutations = {
  [types.SET_DATA](state, { key, data }) {
    state[key] = data;
  },
};

const actions = {
  async [types.FETCH_USER_DATA](context, { data }) {
    const user = await fetchUserData(data);

    context.commit(types.SET_DATA, { key: "user", data: user });
  },
  async [types.FETCH_INDIVIDUAL_ITEM](context, { data }) {
    const item = await fetchIndividualItem(data);

    context.commit(types.SET_DATA, { key: "item", data: item });
  },

  async [types.FETCH_DATA](context, { data: dataKey }) {
    const data = await fetchData(dataKey);

    context.commit(types.SET_DATA, { key: "list", data });
  },
};

const store = new Vuex.Store({
  state: {
    user: {},
    item: {},
    list: [],
  },
  getters,
  mutations,
  actions,
});

export default store;
