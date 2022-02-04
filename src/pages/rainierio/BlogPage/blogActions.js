import axios from '../../../utils/axios'
import {
  aGET_BLOG,
  aSINGLE_BLOG,
  CREATE_ARTICLE,
  aUPDATE_POST,
  DELETE_ARTICLE,
  aBLOG_LOADING,
  REMOVE_BLOG_IMAGE,
  UPDATE_FIELD_POST,
  UPDATE_FIELD_ADD_POST,
  LOCATION_CHANGE,
  DISABLE_SERV_RESP,
} from './types';

export const aGetBlog = () => dispatch => {
  dispatch(aSetBlogLoading());
  axios.get('/api/blog').then(res =>
    dispatch({
      type: aGET_BLOG,
      payload: res.data,
    }),
  );
};

export const aSingleBlog = id => dispatch => {
  dispatch(aSetBlogLoading());
  axios.get(`/api/blog/${id}`).then(res =>
    dispatch({
      type: aSINGLE_BLOG,
      payload: res.data,
    }),
  );
};

export const createArticle = addPost => dispatch => {
  const formData = new FormData();
  Object.keys(addPost).forEach(key => {
    if (key === 'header_img' && addPost[key] !== undefined) {
      addPost.header_img.map(img => formData.append('image', img));
    } else {
      formData.append(key, addPost[key]);
    }
  });

  dispatch(aSetBlogLoading());
  axios.post(`/api/blog/`, formData).then(res =>
    dispatch({
      type: CREATE_ARTICLE,
      payload: res.data,
    }),
  );
};

export const aUpdatePost = post => dispatch => {
  const formData = new FormData();
  Object.keys(post).forEach(key => {
    if (key === 'header_img' && post[key] !== undefined) {
      if (typeof post.header_img === 'string') {
        formData.append('image', post.header_img);
      } else {
        post.header_img.map(img => formData.append('image', img));
      }
    } else {
      formData.append(key, post[key]);
    }
  });

  dispatch(aSetBlogLoading());
  axios.put(`/api/blog/${post.id}`, formData).then(res =>
    dispatch({
      type: aUPDATE_POST,
      payload: res.data,
    }),
  );
};

export const deleteArticle = id => dispatch => {
  dispatch(aSetBlogLoading());
  axios.delete(`/api/blog/${id}`).then(res => {
    if (res.data.errInfo === true) {
      dispatch({
        type: DELETE_ARTICLE,
        payload: res.data,
      });
    } else {
      dispatch({
        type: DELETE_ARTICLE,
        payload: res.data,
        id: id,
      });
    }
  });
};

// remove image on edit page
export const removeImg = img => dispatch => {
  dispatch({
    type: REMOVE_BLOG_IMAGE,
  });
};

//use to clean previous redux state
export const aLocationChange = () => dispatch => {
  dispatch({
    type: LOCATION_CHANGE,
  });
};

export const aUpdateField = (name, value) => dispatch => {
  dispatch({
    type: UPDATE_FIELD_POST,
    payload: { name, value },
  });
};

export const updateAddField = (name, value) => dispatch => {
  dispatch({
    type: UPDATE_FIELD_ADD_POST,
    payload: { name, value },
  });
};

export const aSetBlogLoading = () => {
  return {
    type: aBLOG_LOADING,
  };
};

export const disableServResp = () => {
  return {
    type: DISABLE_SERV_RESP,
  };
};
