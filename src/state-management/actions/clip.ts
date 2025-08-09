import type { AppThunkType } from "../../models/state-types/AppThunkType";
import { GET_CLIP, TOGGLE_CLIP } from "../types";

export const toggleClip =
  (state: boolean): AppThunkType =>
  (dispatch) => {
    dispatch({
      type: TOGGLE_CLIP,
      payload: state,
    });
  };

export const getClip = (): AppThunkType => (dispatch) => {
  dispatch({
    type: GET_CLIP,
  });
};
