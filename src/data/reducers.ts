import { combineReducers } from "redux";
import { shellReducers, ShellStatus } from "./shellReducers";

export interface Data {
    readonly shellStatus: ShellStatus;
}

export const dataReducers = combineReducers<Data>({
    shellStatus: shellReducers,
});
