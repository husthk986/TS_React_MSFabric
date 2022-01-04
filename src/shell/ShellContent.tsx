import * as React from "react";
import { Redirect, Route, RouteProps, Switch } from "react-router-dom";
import { BotRegistrationPageContainer } from "../pages/botregistration/components/BotRegistrationPageContainer";
import { ConfigurationPageContainer } from "../pages/configuration/components/ConfigurationPageContainer";
import { DashboardPageContainer } from "../pages/dashboard/components/DashboardPageContainer";
import { DeployPageContainer } from "../pages/deploy/components/DeployPageContainer";

import "./ShellContent.scss";

export interface StateProps {
  sidebarCollapsed: boolean;
  isChatPanelHidden: boolean;
}

export type ShellContentProps = RouteProps & StateProps;

export class ShellContent extends React.Component<ShellContentProps, {}> {
  constructor(props: Readonly<ShellContentProps>) {
    super(props);
  }

  render(): React.ReactNode {
    const { sidebarCollapsed, isChatPanelHidden } = this.props;
    const chatPanelHiddenClassName = isChatPanelHidden && " collapsed" || "";
    const sidebarCollapsedClassName = sidebarCollapsed && " collapsed" || "";
    const contentWidthClassName = isChatPanelHidden ? `chat-panel-hidden ${sidebarCollapsedClassName}`
      : "chat-panel-visible";

    const appContainerClassName = `app-container ${sidebarCollapsedClassName}`;
    const chatBotClassName = `chatbot ${chatPanelHiddenClassName}`;
    const flexContainerClassName = `flex-container ${contentWidthClassName}`;
    return (
      <div className={appContainerClassName}>
        <div className={flexContainerClassName}>
          <iframe className={chatBotClassName} src="https://webchat.botframework.com/embed/kundemobot?s=z1ocTz5Zg1Y.hylPbRbRON_vKIWOtZkzCXsIAivJeRXBak2pVDyaAX8" />
          <div className="main">
            <div className="app-content">
              <Route exact path="/" component={DashboardPageContainer} />
              <Route path="/dashboard" component={DashboardPageContainer} />
              <Route path="/botsregistration" component={BotRegistrationPageContainer} />
              <Route path="/configuration" component={ConfigurationPageContainer} />
              <Route path="/deploy" component={DeployPageContainer} />
              <Redirect from="/:anything" to="/" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
