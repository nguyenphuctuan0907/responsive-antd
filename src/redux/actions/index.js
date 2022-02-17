import {
  GET_LIST_POST,
  GET_LIST_POST_SUCCESS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
} from "../../constants";

export const getListPost = (payload) => {
  return {
    type: GET_LIST_POST,
    payload,
  };
};

export const getListPostSuccess = (payload) => {
  return {
    type: GET_LIST_POST_SUCCESS,
    payload,
  };
};

export const addPost = (payload) => {
  return {
    type: ADD_POST,
    payload,
  };
};

export const deletePost = (payload) => {
  return {
    type: DELETE_POST,
    payload,
  };
};

export const updatePost = (payload) => {
  return {
    type: UPDATE_POST,
    payload,
  };
};
