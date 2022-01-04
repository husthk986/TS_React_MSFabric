import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import "./ShellHeader.css";

export interface DispatchProps { }

export interface StateProps {
  premiumFeaturesEnabled: boolean;
}

export interface State { }

export type ShellHeaderProps = RouteComponentProps<{}> &
  StateProps &
  DispatchProps;

export class ShellHeader extends React.Component<ShellHeaderProps, State> {
  constructor(props: Readonly<ShellHeaderProps>) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="Header">
        <div className="logo ms-font-xl">
          <strong>CCI Bot Dispatcher</strong>
        </div>
      </div>
    );
  }
}
