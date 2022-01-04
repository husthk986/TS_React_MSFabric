import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import "./ShellFooter.css";

export interface DispatchProps {}

export interface StateProps {
  premiumFeaturesEnabled: boolean;
}

export interface State {}

export type ShellFooterProps = RouteComponentProps<{}> &
  StateProps &
  DispatchProps;

export class ShellFooter extends React.Component<ShellFooterProps, State> {
  constructor(props: Readonly<ShellFooterProps>) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="Footer-container">
        {"© CCI Bot Dispatcher "}
        <span className="text-red">♥</span>
      </div>
    );
  }
}
