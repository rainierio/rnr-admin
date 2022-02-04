import axios from '../../../utils/axios'
import { 
  GET_BASIC_INFO,
  UPDATE_BASIC_INFO,
  DELETE_RESPONSE,
  ADD_EDUCATION,
  EDIT_EDUCATION,
  DELETE_EDUCATION,
  ADD_WORK,
  EDIT_WORK,
  DELETE_WORK,
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  UPDATE_FIELD_CHANGES,
  LOADING
} from "./types";

export const getBasicInfo = () => dispatch => {
  dispatch(setLoading());
  axios.get("/api/about/admin").then(res =>
    dispatch({
      type: GET_BASIC_INFO,
      payload: res.data
    })
  );
};

export const updateBasicInfo = (basicInfo) => dispatch => {
  dispatch(setLoading());
  axios.put(`/api/about/admin/about/${basicInfo.id}`, {basicInfo}).then(res =>
    dispatch({
      type: UPDATE_BASIC_INFO,
      payload: res.data
    })
  );
};

export const deleteResponse = () => dispatch => {
  dispatch({
    type: DELETE_RESPONSE,
  });
};

// Educations Section Actions--------------------------->
export const addEducation = (newEducation) => dispatch => {
  dispatch(setLoading());
  axios.put(`/api/about/admin/edu/${newEducation.parentId}`, {newEducation}).then(res =>
    dispatch({
      type: ADD_EDUCATION,
      payload: res.data
    })  
  )
}

export const editEducation = (editEdu) => dispatch => {
  dispatch(setLoading());
  axios.put(`/api/about/admin/editedu/${editEdu.parentId}`, {editEdu}).then(res =>
    dispatch({
      type: EDIT_EDUCATION,
      payload: res.data
    })  
  )
}

export const deleteEducation = (keyId, parentId) => dispatch => {
  dispatch(setLoading());
  axios.put(`/api/about/admin/deleteedu/${parentId}`, {keyId}).then(res =>
    dispatch({
      type: DELETE_EDUCATION,
      payload: res.data
    })  
  )
}


// Work experience Section Actions--------------------------->
export const addWork = (newWork) => dispatch => {
  console.log(newWork)
  dispatch(setLoading());
  axios.put(`/api/about/admin/work/${newWork.parentId}`, {newWork}).then(res =>
    dispatch({
      type: ADD_WORK,
      payload: res.data
    })  
  )
}

export const editWork = (editWork) => dispatch => {
  console.log(editWork)
  dispatch(setLoading());
  axios.put(`/api/about/admin/editwork/${editWork.parentId}`, {editWork}).then(res =>
    dispatch({
      type: EDIT_WORK,
      payload: res.data
    })  
  )
}

export const deleteWork = (keyId, parentId) => dispatch => {
  console.log(keyId, parentId)
  dispatch(setLoading());
  axios.put(`/api/about/admin/deletework/${parentId}`, {keyId}).then(res =>
    dispatch({
      type: DELETE_WORK,
      payload: res.data
    })  
  )
}


// Project Section Actions--------------------------------->

//@route    Add api/about/admin/addproject/:parentid
//@desc     Add new project
//@access   Admin
export const addProject = (newProj) => dispatch => {
  dispatch(setLoading());
  axios.put(`/api/about/admin/addproject/${newProj.parentId}`, {newProj}).then(res =>
    dispatch({
      type: ADD_PROJECT,
      payload: res.data
    })  
  )
}


//@route    EDIT api/about/admin/editproject/:parentid
//@desc     Edit project
//@access   Admin
export const editProject = (editProj) => dispatch => {
  dispatch(setLoading());
  axios.put(`/api/about/admin/editproject/${editProj.parentId}`, {editProj}).then(res =>
    dispatch({
      type: EDIT_PROJECT,
      payload: res.data
    })  
  )
}


//@route    DELETE api/about/admin/deleteproject/:parentid
//@desc     Delete project
//@access   Admin
export const deleteProject = (keyId, parentId) => dispatch => {
  dispatch(setLoading());
  axios.put(`/api/about/admin/deleteproject/${parentId}`, {keyId}).then(res =>
    dispatch({
      type: DELETE_PROJECT,
      payload: res.data
    })  
  )
}


// Generic actions
export const updateField = (name, value) => dispatch => {
  dispatch({
    type: UPDATE_FIELD_CHANGES,
    payload: { name, value}
  });
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};

