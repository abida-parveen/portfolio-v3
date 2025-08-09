import type { AppThunk } from "../types/actionInterfaces";
import { GET_CLIP, TOGGLE_CLIP } from "../types/actionTypes";

export const toggleClip =
  (state: boolean): AppThunk =>
  (dispatch) => {
    dispatch({
      type: TOGGLE_CLIP,
      payload: state,
    });
  };

export const getClip = (): AppThunk => (dispatch) => {
  dispatch({
    type: GET_CLIP,
  });
};
