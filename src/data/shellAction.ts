import { ActionBase } from "../base/action";

export const enum ShellActionTypes {
    ToggleCollapse = "Shell_ToggleCollapse",
    ToggleCanvasVisibility = "Shell_ToggleCanvasVisibility",
    UpdateBotProcessingState = "Shell_UpdateBotProcessingState",
}

export interface ToggleCollapseAction extends ActionBase<void> { }
export interface ToggleCanvasVisibilityAction extends ActionBase<void> { }

export const ShellActions = {
    toggleCollapsed(): ToggleCollapseAction {
        const toggleCollapseAction: ToggleCollapseAction = {
            type: ShellActionTypes.ToggleCollapse,
            payload: undefined,
        };
        return toggleCollapseAction;
    },
    toggleCanvasVisibility(): ToggleCanvasVisibilityAction {
        const toggleTestYourBotAction: ToggleCanvasVisibilityAction = {
            type: ShellActionTypes.ToggleCanvasVisibility,
            payload: undefined,
        };
        return toggleTestYourBotAction;
    },
};
