import {  USER_LOGIN, USER_LOGOUT, LOAD_PROFILE, UPDATE_PROFILE, SET_CURRENT_USER, USER_LOGIN_LOADING, CHECK_TOKEN, UPDATE_FIELD } from "./Types";

const initialState = {
  userName: null,
  userEmail: null,
  firstName: null,
  lastName: null,
  isLogged: false,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userName: action.payload.username,
        userEmail: action.payload.email,
        isLogged: true,
        loading: false
      };

    case USER_LOGOUT:
      return {
        ...state,
        userName: null,
        isLogged: false,
        loading: false
      };

    case CHECK_TOKEN: 
      return {
        ...state, 
        userToken: action.payload
      }      
    
    case SET_CURRENT_USER:
      return {
        ...state,
        userName: action.payload.username,
        userEmail: action.payload.email,
        isLogged: true,
        loading: false
      };

    case UPDATE_PROFILE:
      console.log(action.payload)
      return {
        ...state,
        userUpdateRes: action.payload.msg,
        loading: false
      };

    case LOAD_PROFILE:
      const { firstname, lastname} = action.payload
      return {
        ...state,
        firstName: firstname,
        lastName: lastname,
        loading: false
      };

    case USER_LOGIN_LOADING:
      return {
        ...state,
        userName: action.payload,
        isLogged: true,
        loading: false
      };
    
    case UPDATE_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
      
    default:
      return state;
  }
}
