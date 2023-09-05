import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://api.hnpwa.com/v0",
});

// 1. HTTP Request & Response와 관련된 기본 설정
const url = {
  news: `/news`,
  ask: "/ask",
  jobs: "/jobs",
};

// 2. API 함수들을 정리
const fetchNewsList = async (newsId) => {
  try {
    const res = await customAxios(`${url.news}/${newsId}.json`);

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

export { fetchNewsList, fetchAskList, fetchJobsList };
