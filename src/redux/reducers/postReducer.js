import {
  GET_LIST_POST,
  GET_LIST_POST_SUCCESS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
} from "../../constants";

const initialState = {
  post: "",
  listPost: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_POST:
      return {
        ...state,
      };
    case GET_LIST_POST_SUCCESS:
      return {
        ...state,
        listPost: action.payload,
      };
    case ADD_POST:
      const numR = Math.floor(Math.random() * 100);
      return {
        ...state,
        listPost: [
          ...state.listPost,
          {
            title: action.payload,
            id: numR,
          },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        listPost: action.payload,
      };

    case UPDATE_POST:
      const findId = state.listPost.findIndex(
        (p) => p.id === action.payload.idPostFind
      );
      state.listPost[findId] = {
        ...state.listPost[findId],
        title: action.payload.postTitle,
        id: action.payload.idPostFind,
      };
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default postsReducer;
