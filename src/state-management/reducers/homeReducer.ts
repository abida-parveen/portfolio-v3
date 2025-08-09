import type BaseActionType from "../../models/state-types/BaseActionType";
import type HomeDataType from "../../models/state-types/HomeDataType";
import { HOME_DATA } from "../types";

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
  action: BaseActionType<HomeDataType>
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
