import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "d40e952039a537a9975d6581409ed15d",
    language: "ko-KR",
  },
});

export default instance;
