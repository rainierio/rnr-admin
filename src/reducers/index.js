//Starting point of all reducer
import { combineReducers } from "redux";
import aBlogReducer from "../pages/rainierio/BlogPage/blogReducer";
import userAuth from "../pages/rainierio/AuthPage/AuthReducer";
import basicInfo from "../pages/rainierio/AboutPage/AboutPageReducer";
import skills from "../pages/rainierio/SkillPage/SkillReducers";
import portfolios from "../pages/rainierio/PortfolioPage/PortfolioReducers";

export default combineReducers({
  aBlog: aBlogReducer,
  userAuth,
  basicInfo,
  skills,
  portfolios,
});
