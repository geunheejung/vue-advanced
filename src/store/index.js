import Vuex from "vuex";
import {
  fetchJobsList,
  fetchNewsList,
  fetchAskList,
  fetchUserData,
  fetchIndividualItem,
  fetchData,
} from "../api";
import Vue from "vue";

Vue.use(Vuex);

export const types = {
  FETCH_NEWS_LIST: "FETCH_NEWS_LIST",
  FETCH_JOBS_LIST: "FETCH_JOBS_LIST",
  FETCH_ASK_LIST: "FETCH_ASK_LIST",
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
  async [types.FETCH_NEWS_LIST](context, { id }) {
    const newsList = await fetchNewsList(id);

    context.commit(types.SET_DATA, { key: "newsList", data: newsList });

    return newsList;
  },
  async [types.FETCH_JOBS_LIST](context, { id }) {
    const jobsList = await fetchJobsList(id);

    context.commit(types.SET_DATA, { key: "jobsList", data: jobsList });
  },
  async [types.FETCH_ASK_LIST](context, { id }) {
    const askList = await fetchAskList(id);

    context.commit(types.SET_DATA, { key: "askList", data: askList });
  },
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
    newsList: [],
    jobsList: [],
    askList: [],
    user: {},
    item: {},
    list: [],
  },
  getters,
  mutations,
  actions,
});

export default store;
