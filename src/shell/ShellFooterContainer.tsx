import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StoreState, ThunkDispatch } from "../reducers";
import {
  DispatchProps,
  ShellFooter,
  ShellFooterProps,
  StateProps,
} from "./ShellFooter";

function mapStateToProps(state: StoreState): StateProps {
  return {
    premiumFeaturesEnabled: true,
  };
}

export function mapDispatchToProps(dispatch: ThunkDispatch): DispatchProps {
  return {};
}

export const ShellFooterContainer = withRouter(
  connect<
    StateProps,
    DispatchProps,
    RouteComponentProps<{}>,
    ShellFooterProps
  >(
    mapStateToProps,
    mapDispatchToProps,
    (
      stateProps: StateProps,
      dispatchProps: DispatchProps,
      ownProps: RouteComponentProps<{}>,
    ): ShellFooterProps => {
      return {
        ...stateProps,
        ...ownProps,
        ...dispatchProps,
      };
    },
  )(ShellFooter),
);
