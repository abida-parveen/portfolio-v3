import type { HomeDataType } from "../../types/home.type";
import { HOME_DATA } from "../types/actionTypes";

interface HomeDataAction {
  type: typeof HOME_DATA;
  payload: HomeDataType;
}

const initialState: HomeDataType = {
  serviceData: [],
  portfolioData: [],
  workExperienceData: [],
  testimonialsData: [],
  educationData: [],
  skillsData: [],
  contactData: [],
};

const homeReducer = (
  state = initialState,
  action: HomeDataAction
): HomeDataType => {
  switch (action.type) {
    case HOME_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default homeReducer;
