import axios from "axios";
import Cookies from "js-cookie"
import {  USER_LOGIN, USER_LOGOUT, LOAD_PROFILE, UPDATE_PROFILE, SET_CURRENT_USER, USER_LOGIN_LOADING, CHECK_TOKEN, UPDATE_FIELD } from "./Types";

export const userLogin = (loginData) => dispatch => {
  dispatch(userLoginLoading());
  axios.post(`/api/userauth/authenticate`, {loginData}).then(res =>
    dispatch({
      type: USER_LOGIN,
      payload: res.data
    })
  );
};

export const userLogout = () => dispatch => {
  //axios.get(`/api/userauth/logout`, {}).then(res => // Activate when needed
    dispatch({
      type: USER_LOGOUT,
      // payload: res.data
    })
  //);
  Cookies.remove('USER_SESSION');
};

export const checkToken = () => dispatch => {
  axios.post(`/api/userauth/checktoken`).then(res =>
    dispatch({
      type: CHECK_TOKEN,
      payload: res.status
    })
  );
};

export const setCurrentUser = (userData) => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: userData
  })
};


export const loadUserProfile = (email) => dispatch => {
  axios.get(`/api/userauth/userprofile`, email).then(res => {
    dispatch({
      type: LOAD_PROFILE,
      payload: res.data
    }) 
  })
};

export const updateProfile = (userUpdate) => dispatch => {
  axios.put(`/api/userauth/updateprofile`, userUpdate).then( res =>
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    })
  )
};


export const userLoginLoading = () => {
  return {
    type: USER_LOGIN_LOADING
  };
};

export const updateField = (name, value) => dispatch => {
  dispatch({
    type: UPDATE_FIELD,
    payload: { name, value}
  });
};
