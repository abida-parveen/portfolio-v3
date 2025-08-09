import { GET_CLIP, TOGGLE_CLIP } from "../types";

type ClipState = boolean

interface ToggleClipAction {
  type: typeof TOGGLE_CLIP;
  payload: boolean
}

interface GetClipAction {
  type: typeof GET_CLIP;
}

type ClipAction = ToggleClipAction | GetClipAction

const initialState: ClipState = true;

const clipReducer = (state = initialState, action: ClipAction) => {
  switch (action.type) {
    case TOGGLE_CLIP:
      state = action.payload;
      return state;
    case GET_CLIP:
      return state;
    default:
      return state;
  }
};
export default clipReducer;
