
import { NEWS_API_KEY } from "../config/constants";
import axios from "axios";

export function fetchNews(query) {
  let url = `http://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API_KEY}`;
  if (query) {
    url += `&q=${query}`;
  }
  return axios(url);
}