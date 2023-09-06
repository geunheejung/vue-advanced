import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://api.hnpwa.com/v0",
});

// 1. HTTP Request & Response와 관련된 기본 설정
export const url = {
  news: `/news`,
  ask: "/ask",
  jobs: "/jobs",
  user: "/user",
  // /item/13831370.json
  individualItem: "/item",
};

// 2. API 함수들을 정리
const fetchNewsList = async (newsId) => {
  try {
    const _url = `${url.news}/${newsId}.json`;
    const res = await customAxios(_url);

    return res.data;
  } catch (error) {
    throw "fetchNewsList Error";
  }
};

const fetchAskList = async (askId) => {
  try {
    const res = await customAxios(`${url.ask}/${askId}.json`);

    return res.data;
  } catch (error) {
    throw "fetchAskList Error";
  }
};

const fetchJobsList = async (jobsId) => {
  try {
    const res = await customAxios(`${url.jobs}/${jobsId}.json`);

    return res.data;
  } catch (error) {
    throw "fetchJobsList Error";
  }
};

const fetchUserData = async (userName) => {
  try {
    const res = await customAxios(`${url.user}/${userName}.json`);

    return res.data;
  } catch (error) {
    throw "fetchUserData Error";
  }
};

const fetchIndividualItem = async (itemId) => {
  try {
    const res = await customAxios(`${url.individualItem}/${itemId}.json`);

    return res.data;
  } catch (error) {
    throw "fetchIndividualItem Error";
  }
};

const fetchData = async (dataType, itemId = 1) => {
  try {
    const res = await customAxios(`${dataType}/${itemId}.json`);

    return res.data;
  } catch (error) {
    throw `fetchData error ${error}, ${dataType}`;
  }
};

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserData,
  fetchIndividualItem,
  fetchData,
};
