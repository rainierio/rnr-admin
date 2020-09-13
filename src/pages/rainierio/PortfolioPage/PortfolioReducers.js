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

const initialState = {
  portfolio: [],
  singlePortfolio: {},
  errorMsg: {},
  successMsg: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_INITIAL:
      return {
        ...state,
        singlePortfolio: {},
        errorMsg: {},
        successMsg: {},
      };

    case GET_PORTFOLIOS:
      return {
        ...state,
        portfolio: action.payload,
        errorMsg: {},
        successMsg: {},
        loading: false,
      };

    case GET_SINGLE_PORTFOLIO:
      return {
        ...state,
        singlePortfolio: action.payload,
        errorMsg: {},
        successMsg: {},
        loading: false,
      };

    case ADD_PORTFOLIO:
      return {
        ...state,
        portfolio: [...state.portfolio, action.payload.portfolio],
        errorMsg: (action.payload.err && action.payload.err.message) || '',
        successMsg:
          (action.payload.successMsg && action.payload.successMsg) || '',
      };

    case EDIT_PORTFOLIO:
      return {
        ...state,
        singlePortfolio:
          (action.payload.portfolio && action.payload.portfolio) ||
          state.singlePortfolio,
        errorMsg: (action.payload.err && action.payload.err.message) || '',
        successMsg:
          (action.payload.successMsg && action.payload.successMsg) || '',
        loading: false,
      };

    case DELETE_PORTFOLIO:
      return {
        ...state,
        portfolio: state.portfolio.filter(skill => skill._id !== action.id),
        loading: false,
      };

    case REMOVE_IMAGE:
      return {
        ...state,
        singlePortfolio: {
          ...state.singlePortfolio,
          image: state.singlePortfolio.image.filter(
            img => img !== action.payload,
          ),
        },
        loading: false,
      };

    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}
