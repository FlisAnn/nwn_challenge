import axios from "axios";

const NewsService = {
  async index(dispatch) {
    let response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=se&apiKey=48fd0dea52e94e779588814f143e8e88"
    );
    dispatch({ type: "SET_NEWS_FEED", payload: response.data.articles });
  },

  async search(query) {
    let result = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&country=se&apiKey=48fd0dea52e94e779588814f143e8e88`
    );
    return result.data.articles;
  },
};

export default NewsService;
