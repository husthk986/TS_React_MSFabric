import { AnyAction } from "redux";

export const enum AsyncActionStatus {
  none,
  loading,
  error,
  success,
}

export interface ActionBase<T> extends AnyAction {
  // tslint:disable-next-line:no-reserved-keywords
  type: string;
  payload: T;
  status?: AsyncActionStatus;
}