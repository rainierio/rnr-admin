import { 
  aGET_BLOG,
  aSINGLE_BLOG,
  CREATE_ARTICLE,
  aUPDATE_POST,
  DELETE_ARTICLE,
  REMOVE_BLOG_IMAGE,
  aBLOG_LOADING,
  UPDATE_FIELD_POST,
  UPDATE_FIELD_ADD_POST,
  LOCATION_CHANGE,
  DISABLE_SERV_RESP,
} from "./types";

const initialState = {
  blog: [],
  singlePost: [],
  addPost: {},
  updatedPost: {
    serverMsg:'',
    serverErr:'',
    serverResp:'',
    },
  errInfo: '',
  respMsg: '',
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case aGET_BLOG:
      return {
        ...state,
        blog: action.payload,
        loading: false
      };

    case aSINGLE_BLOG:
      return {
        ...state,
        singlePost: action.payload,
        loading: false
      };
    
    case CREATE_ARTICLE:
      return {
        ...state,
        addPost: '',
        addPostResp: action.payload.msg,
        loading: false
      };

    case aUPDATE_POST:
      return {
        ...state,
        updatedPost: {
          serverMsg: action.payload.msg,
          serverErr: action.payload.errMsg,
          serverResp: true,
        },
        loading: false
      };

    case DELETE_ARTICLE:
      return {
        ...state,
        errInfo: action.payload.errInfo,
        blog: action.payload.errInfo === true
              ? state.blog
              : state.blog.filter(blog => blog._id !== action.id),
        respMsg: action.payload.respMsg,
        loading: false
      };

    case UPDATE_FIELD_POST: 
      return {
        ...state, 
        singlePost: {
          ...state.singlePost,
          [action.payload.name]: action.payload.value
        }
      }
    
    case UPDATE_FIELD_ADD_POST: 
    return {
      ...state, 
      addPost: {
        ...state.addPost,
        [action.payload.name]: action.payload.value
      }
    }

    case REMOVE_BLOG_IMAGE:
    console.log('reduceres');
    return {
      ...state, 
      singlePost: {
        ...state.singlePost,
        header_img: []
      }
    }
    
    //use to clean previous redux
    case LOCATION_CHANGE: 
      return {
        ...state,
        singlePost: []
      }
      

    case aBLOG_LOADING:
      return {
        ...state,
        loading: true
      };
      
    case DISABLE_SERV_RESP:
      return {
        ...state,
        updatedPost: {
          serverMsg:'',
          serverResp: false,
          serverError:''
        },
        respMsg:'',
        errInfo:'',
        addPostResp:''
      };

    default:
      return state;
  }
}
