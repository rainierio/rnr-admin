import axios from '../../../utils/axios'
import {
  SET_INITIAL,
  GET_PORTFOLIOS,
  GET_SINGLE_PORTFOLIO,
  ADD_PORTFOLIO,
  EDIT_PORTFOLIO,
  DELETE_PORTFOLIO,
  REMOVE_IMAGE,
  LOADING,
} from './types';

export const setInitial = () => dispatch => {
  dispatch({ type: SET_INITIAL });
};

export const getPortfolios = () => dispatch => {
  dispatch(setloading(true));
  axios.get('/api/portfolio/').then(res =>
    dispatch({
      type: GET_PORTFOLIOS,
      payload: res.data,
    }),
  );
};

export const getSinglePortfolio = id => dispatch => {
  dispatch(setloading(true));
  axios.get(`/api/portfolio/detail/${id}`).then(res =>
    dispatch({
      type: GET_SINGLE_PORTFOLIO,
      payload: res.data,
    }),
  );
};

export const addPortfolio = newPortfolio => dispatch => {
  dispatch(setloading(true));
  const formData = new FormData();
  Object.keys(newPortfolio).forEach(key => {
    if (key === 'ImageUpload' && newPortfolio[key] !== undefined) {
      newPortfolio.ImageUpload.map(img => formData.append('image', img));
    } else {
      formData.append(key, newPortfolio[key]);
    }
  });

  axios.post('/api/portfolio', formData).then(res =>
    dispatch({
      type: ADD_PORTFOLIO,
      payload: res.data,
    }),
  );
};

export const editPortfolio = (id, data) => dispatch => {
  dispatch(setloading(true));
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    if (key === 'ImageUpload' && data[key] !== undefined) {
      data.ImageUpload.map(img => formData.append('image', img));
    } else {
      formData.append(key, data[key]);
    }
  });

  axios.put(`/api/portfolio/${id}`, formData).then(res =>
    dispatch({
      type: EDIT_PORTFOLIO,
      payload: res.data,
    }),
  );
};

export const deletePortfolio = id => dispatch => {
  dispatch(setloading(true));
  axios.delete(`/api/portfolio/${id}`).then(res => {
    if (!res.data.err) {
      dispatch({
        type: DELETE_PORTFOLIO,
        payload: res.data,
        id: id,
      });
    } else {
      dispatch(setloading(false));
    }
  });
};

export const removeImg = img => dispatch => {
  dispatch({
    type: REMOVE_IMAGE,
    payload: img,
  });
};

export const setloading = status => {
  return {
    type: LOADING,
    payload: status,
  };
};
