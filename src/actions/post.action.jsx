import axios from "axios";

export const GET_POST = "GET_POSTS";

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/posts?_sort=id&_order=desc")
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data }).catch((error) =>
          console.log(error)
        );
      });
  };
};
