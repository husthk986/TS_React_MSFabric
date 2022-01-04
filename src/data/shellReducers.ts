import { combineReducers, Reducer } from "redux";
import { ShellActionTypes, ToggleCanvasVisibilityAction, ToggleCollapseAction } from "./shellAction";

function isCollapsed(state: boolean = false, action: ToggleCollapseAction): boolean {
    if (action.type === ShellActionTypes.ToggleCollapse) {
        return !state;
    }

    return state;
}

function isChatPanelHidden(state: boolean = false, action: ToggleCanvasVisibilityAction): boolean {
    if (action.type === ShellActionTypes.ToggleCanvasVisibility) {
        return !state;
    }

    return state;
}

export interface ShellStatus {
    isCollapsed: boolean;
    isChatPanelHidden: boolean;
}

export const shellReducers: Reducer<ShellStatus> = combineReducers({
    isCollapsed,
    isChatPanelHidden,
});
