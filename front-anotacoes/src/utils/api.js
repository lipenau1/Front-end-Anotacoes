import axios from "./axios";

const api = {
  login: async (data) => {
    const request = await axios({
      method: "POST",
      data: data,
      url: "user/login",
    });
    return request;
  },
  cards: async (data) => {
    const request = await axios.get(
      `http://localhost:5001/container/board?id=${data}`
    );
    return request.data;
  },
};

export default api;
