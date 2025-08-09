import type { ThunkAction } from "redux-thunk";
import type { RootState } from "../../state-management/store";
import type BaseActionType from "./BaseActionType";

export type AppThunkType = ThunkAction<
  void,
  RootState,
  unknown,
  BaseActionType<any>
>;