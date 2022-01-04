import { AnyAction, combineReducers } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Data, dataReducers } from "./data/reducers";
import { UiState, uiStateReducers } from "./pages/reducers";

export interface StoreState {
  readonly uiState: UiState;
  readonly data: Data;
}

export const reducers = combineReducers<StoreState>({
  uiState: uiStateReducers,
  data: dataReducers,
});

export type ThunkAction = ThunkAction<
  Promise<void>,
  StoreState,
  undefined,
  AnyAction
>;
export type ThunkActionSync = ThunkAction<
  void,
  StoreState,
  undefined,
  AnyAction
>;
export type ThunkDispatch = ThunkDispatch<StoreState, undefined, AnyAction>;
