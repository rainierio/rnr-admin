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


const initialState = {
  basicInfo: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BASIC_INFO:
      return {
        ...state,
        basicInfo: action.payload,
        loading: false
      };

    case UPDATE_BASIC_INFO:
      return {
        ...state,
        basicInfo: action.payload.basicInfo,
        errMsg: action.payload.errMsg,
        msg: action.payload.msg,
        loading: false
      };

    case UPDATE_FIELD_CHANGES: 
    return {
      ...state, 
      basicInfo: {
        ...state.basicInfo,
        [action.payload.name]: action.payload.value
      }
    }

    case DELETE_RESPONSE: 
    return {
      ...state,
      msg: ""
    }

    // Education section reducers------>
    case ADD_EDUCATION:
      let addData;
      let addResponseMsg;
      if (action.payload.err) {
          addData = state.basicInfo
          addResponseMsg = action.payload.err 
      }else {
        addData = action.payload.basicInfo
        addResponseMsg = action.payload.successMsg
      }
      return {
        ...state,
        basicInfo: addData,
        responseMsg: addResponseMsg,
        loading: false
      }

    case EDIT_EDUCATION:
    let updatedData;
    let responseMsg;
    if (action.payload.err) {
        updatedData = state.basicInfo
        responseMsg = action.payload.err 
    }else {
      updatedData = action.payload.basicInfo
      responseMsg = action.payload.successMsg
    }
    return {
        ...state,
        basicInfo: updatedData,
        responseMsg: responseMsg,
        loading: false
      }

    case DELETE_EDUCATION:
      return {
        ...state,
        basicInfo: action.payload.basicInfo,
        loading: false
      }

    // Work section reducers------>
    case ADD_WORK:
      return {
        ...state,
        basicInfo: action.payload.basicInfo,
        loading: false
      }

    case EDIT_WORK:
      let updatedDataWork;
      let responseMsgWork;
      if (action.payload.err) {
          updatedDataWork = state.basicInfo
          responseMsgWork = action.payload.errorMsg 
      }else {
        updatedDataWork = action.payload.basicInfo
        responseMsgWork = action.payload.successMsg
      }
      return {
          ...state,
          basicInfo: updatedDataWork,
          responseMsg: responseMsgWork,
          loading: false
        }

    case DELETE_WORK:
      return {
        ...state,
        basicInfo: action.payload.basicInfo,
        loading: false
      }

    // Project section reducers------>  
    case ADD_PROJECT:
      let addDataProj;
      let addresponseMsgProj;
      if (action.payload.err) {
          addDataProj = state.basicInfo
          addresponseMsgProj = action.payload.errorMsg 
      }else {
        addDataProj = action.payload.basicInfo
        addresponseMsgProj = action.payload.successMsg
      }      
      return {
        ...state,
        basicInfo: addDataProj,
        responseMsg: addresponseMsgProj,
        loading: false
      }

    case EDIT_PROJECT:
      let updatedDataProj;
      let responseMsgProj;
      if (action.payload.err) {
          updatedDataProj = state.basicInfo
          responseMsgProj = action.payload.errorMsg 
      }else {
        updatedDataProj = action.payload.basicInfo
        responseMsgProj = action.payload.successMsg
      }

      return {  
          ...state,
          basicInfo: updatedDataProj,
          responseMsg: responseMsgProj,
          loading: false
        }

    case DELETE_PROJECT:
      return {
        ...state,
        basicInfo: action.payload.basicInfo,
        loading: false
      }

    case LOADING:
      return {
        ...state,
        responseMsg: "",
        loading: true
      };

    default:
      return state;
  }
}
