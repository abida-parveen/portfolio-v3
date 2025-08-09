import type { ThunkAction } from "redux-thunk";
import type { RootState } from "../store";

export interface BaseAction<PayloadType = null>{
    type: string;
    payload?: PayloadType;
}

export type AppThunk = ThunkAction<void, RootState, unknown, BaseAction>;