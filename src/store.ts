import { applyMiddleware, Middleware } from "redux";
import { createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { ActionBase } from "./base/action";
import { reducers, StoreState } from "./reducers";

const middlewares: Middleware[] = [thunkMiddleware];

export const store = createStore<StoreState, ActionBase<unknown>, {}, {}>(
  reducers,
  applyMiddleware(...middlewares),
);
