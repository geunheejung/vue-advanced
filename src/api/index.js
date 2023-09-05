import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://api.hnpwa.com/v0",
});

// 1. HTTP Request & Response와 관련된 기본 설정
const url = {
  news: `/news`,
};

// 2. API 함수들을 정리
const fetchNewsList = async (newsId) => {
  try {
    const res = await customAxios(`${url.news}/${newsId}.json`);

    return res.data;
  } catch (error) {
    throw "getNews Error";
  }
};

export { fetchNewsList };
