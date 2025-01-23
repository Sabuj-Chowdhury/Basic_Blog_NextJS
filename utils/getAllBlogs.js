const { default: axios } = require("axios");

export const getAllBlogs = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};
