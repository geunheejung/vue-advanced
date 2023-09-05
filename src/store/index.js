import Vuex from "vuex";
import { fetchJobsList, fetchNewsList, fetchAskList } from "../api";
import Vue from "vue";

Vue.use(Vuex);

export const types = {
  FETCH_NEWS_LIST: "FETCH_NEWS_LIST",
  FETCH_JOBS_LIST: "FETCH_JOBS_LIST",
  FETCH_ASK_LIST: "FETCH_ASK_LIST",
  SET_DATA: "SET_DATA",
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
  },
  async [types.FETCH_JOBS_LIST](context, { id }) {
    const jobsList = await fetchJobsList(id);

    context.commit(types.SET_DATA, { key: "jobsList", data: jobsList });
  },
  async [types.FETCH_ASK_LIST](context, { id }) {
    const askList = await fetchAskList(id);

    context.commit(types.SET_DATA, { key: "askList", data: askList });
  },
};

const store = new Vuex.Store({
  state: {
    newsList: [],
    jobsList: [],
    askList: [],
  },
  getters,
  mutations,
  actions,
});

export default store;
