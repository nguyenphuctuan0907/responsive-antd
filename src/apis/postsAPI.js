import axios from "axios";

export const getListPostData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    return response;
  } catch (e) {
    console.log("error axios::", e);
  }
};
