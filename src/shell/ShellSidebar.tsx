import { ISidebarItemProps, Sidebar, SidebarButton } from "@business-app/fabric";
import { getTheme } from "office-ui-fabric-react";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ShellResources } from "./ShellResources";
import "./ShellSidebar.scss";

export interface SideBarMenuItem extends ISidebarItemProps {
  key: string;
  name?: string;
  href?: string;
  icon?: string;
  footer?: boolean;
  hide?: boolean;
}

export interface StateProps {
  isCollapsed: boolean;
  menuItems: SideBarMenuItem[];
  footerMenuItems: SideBarMenuItem[];
  isBotReadOnly: boolean;
}

export interface DispatchProps {
  onToggleCollapse: () => void;
  onToggleCanvasVisibility: () => void;
}

export const ShellSidebarToggleBotFooterKey: string = "shell-sidebar-toggle-bot";

interface State {
  activeKey: string;
}

const rootLocationToKeyMap = {
  "/topic": "/topics",
  "/dialog": "/topics",
};

type Props = StateProps & DispatchProps & RouteComponentProps<{}>;
const hideableItems: string[] = [ShellResources.menuItems.deploy];

export class ShellSidebar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeKey: this.getCurrentRouteKey(),
    };

    this.setCheckedState = this.setCheckedState.bind(this);
  }

  private getCurrentRouteKey(): string {
    if (!this.props.location ||
      !this.props.location.pathname) {
      return "/";
    }

    const rootLocation = `/${this.props.location.pathname.split("/")[1] || ""}`;
    return rootLocationToKeyMap[rootLocation] || rootLocation;
  }

  private shouldItemBeDisabled(name: string): boolean {
    if (this.props.isBotReadOnly && hideableItems.indexOf(name) > -1) {
      return true;
    }
    return false;
  }

  private setCheckedState(key: string): void {
    if (key === ShellSidebarToggleBotFooterKey) {
      this.props.onToggleCanvasVisibility();
      return;
    }

    this.setState({
      activeKey: key,
    });
  }

  private getSideBarMenuItems(menuItems: SideBarMenuItem[]): ISidebarItemProps[] {
    return menuItems
      .map((menuItem) => {
        return {
          key: menuItem.key,
          name: menuItem.name,
          onRender: (item: SideBarMenuItem) => {
            return (
              <SidebarButton
                disabled={this.shouldItemBeDisabled(item.name)}
                key={item.key}
                text={item.name}
                iconProps={{ iconName: menuItem.icon }}
                role="menuitem"
                theme={getTheme()}
                href={menuItem.href}
                checked={item.key === this.state.activeKey}
                onClick={() => this.setCheckedState(item.key)}
              />
            );
          },
        };
      });
  }

  render(): React.ReactNode {
    return (
      <Sidebar
        className="app-sider"
        id={"sidebar-collapsed"}
        collapsible={true}
        theme={getTheme()}
        collapseButtonAriaLabel={"sitemap"}
        items={this.getSideBarMenuItems(this.props.menuItems)}
        footerItems={this.getSideBarMenuItems(this.props.footerMenuItems)}
        onCollapseChanged={this.props.onToggleCollapse}
      />
    );
  }
}
