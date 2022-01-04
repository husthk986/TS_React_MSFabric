import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { StoreState, ThunkDispatch } from "../reducers";
import { ShellContent } from "./ShellContent";
import { StateProps } from "./ShellContent";

function mapStateToProps(state: StoreState): StateProps {
    return {
        sidebarCollapsed: state.data.shellStatus.isCollapsed,
        isChatPanelHidden: state.data.shellStatus.isChatPanelHidden,
    };
}

// tslint:disable-next-line: no-any
export const ShellContentContainer = withRouter(connect(mapStateToProps)(ShellContent) as React.ComponentType<any>);
