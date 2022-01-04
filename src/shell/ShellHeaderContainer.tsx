import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StoreState, ThunkDispatch } from "../reducers";
import {
  DispatchProps,
  ShellHeader,
  ShellHeaderProps,
  StateProps,
} from "./ShellHeader";

function mapStateToProps(state: StoreState): StateProps {
  return {
    premiumFeaturesEnabled: true,
  };
}

export function mapDispatchToProps(dispatch: ThunkDispatch): DispatchProps {
  return {};
}

export const ShellHeaderContainer = withRouter(
  connect<
    StateProps,
    DispatchProps,
    RouteComponentProps<{}>,
    ShellHeaderProps
  >(
    mapStateToProps,
    mapDispatchToProps,
    (
      stateProps: StateProps,
      dispatchProps: DispatchProps,
      ownProps: RouteComponentProps<{}>,
    ): ShellHeaderProps => {
      return {
        ...stateProps,
        ...ownProps,
        ...dispatchProps,
      };
    },
  )(ShellHeader),
);
