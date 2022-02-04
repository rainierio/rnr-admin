import axios from '../../../utils/axios'
import {     
    GET_SKILLS,
    ADD_SKILL,
    EDIT_SKILL,
    DELETE_SKILL,
    LOADING,
    UPDATE_FIELD_CHANGES
 } from "./types";

 export const getskills = () => dispatch => {
    dispatch(setloading(true));
     axios.get("api/skills/admin/getskills").then(res =>
        dispatch({
            type:GET_SKILLS,
            payload: res.data
            })
        )
 }

 export const addskill = (newskill) => dispatch => {
    dispatch(setloading(true));
    axios.post("api/skills/admin/addskill", newskill).then( res =>
       dispatch({
           type:ADD_SKILL,
           payload: res.data
           })
       )
}

export const editskill = (editedskill) => dispatch => {
    dispatch(setloading(true));
    axios.put(`api/skills/admin/editskill/${editedskill.keyId}`, editedskill).then( res =>
       dispatch({
           type:EDIT_SKILL,
           payload: res.data
           })
      )
}

export const deleteskill = (id) => dispatch => {
    dispatch(setloading(true));
    axios.delete(`api/skills/admin/deleteskill/${id}`).then(res => {
        if (!res.data.err) {
            dispatch({
                type:DELETE_SKILL,
                payload: res.data,
                id: id
                })
        } else {
            dispatch(setloading(false));
        }   
    })  
}


export const updateField = (name, value) => dispatch => {
    dispatch({
      type: UPDATE_FIELD_CHANGES,
      payload: { name, value}
    });
  };

 export const setloading = (status) => {
     return {
         type: LOADING,
         payload: status
     }
 }