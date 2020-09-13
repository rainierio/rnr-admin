import {     
    GET_SKILLS,
    ADD_SKILL,
    EDIT_SKILL,
    DELETE_SKILL,
    LOADING,
 } from "./types";

 const initialState ={
     skill:[],
     loading: false
 }

 export default function(state = initialState, action){
    switch (action.type) {
        case GET_SKILLS:
             return {
                ...state,
                skill: action.payload,
                loading: false
             }

        case ADD_SKILL:
            return {
                ...state,
                skill:[...state.skill, action.payload.skill]
            }

        case EDIT_SKILL:
            return {
                ...state,
                skill: state.skill.map(skillset => {
                    if (skillset._id === action.payload.skill._id) {
                        return action.payload.skill
                    }
                    return skillset
                })
            }
                
        case DELETE_SKILL:
            return {
                ...state,
                skill: state.skill.filter(skill => skill._id !== action.id),
                loading: false
            }

        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
            
        default:
         return state
     }
 }