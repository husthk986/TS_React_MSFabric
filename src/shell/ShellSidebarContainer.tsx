import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ShellActions } from "../data/shellAction";
import { StoreState, ThunkDispatch } from "../reducers";
import { ShellResources } from "./ShellResources";
import {
  DispatchProps,
  ShellSidebar,
  ShellSidebarToggleBotFooterKey,
  SideBarMenuItem,
  StateProps,
} from "./ShellSidebar";

const menuItems: SideBarMenuItem[] = [
  {
    key: "/dashboard",
    name: ShellResources.menuItems.dashboard,
    href: "/#/dashboard",
    icon: "Home",
    footer: false,
  },
  {
    key: "/botsregistration",
    name: ShellResources.menuItems.botsregistration,
    href: "/#/botsregistration",
    icon: "Telemarketer",
    footer: false,
  },
  {
    key: "/configuration",
    name: ShellResources.menuItems.configuration,
    href: "/#/configuration",
    icon: "Color",
    footer: false,
  },
  {
    key: "/deploy",
    name: ShellResources.menuItems.deploy,
    href: "/#/deploy",
    icon: "Deploy",
    footer: false,
  },
  {
    key: ShellSidebarToggleBotFooterKey,
    footer: true,
  },
];

function mapStateToProps(state: StoreState): StateProps {
  const visibleMenuItems = menuItems.filter((item) => !item.hide);

  const isCollapsed = state.data.shellStatus.isCollapsed;
  const isChatPanelHidden = state.data.shellStatus.isChatPanelHidden;
  const footerMenuItems = visibleMenuItems.filter((item) => item.footer);

  const footerName = isChatPanelHidden
    ? ShellResources.footers.showYourBot
    : ShellResources.footers.hideYourBot;
  footerMenuItems[0].name = (!isCollapsed && footerName) || "";

  return {
    isCollapsed,
    menuItems: visibleMenuItems.filter((item) => !item.footer),
    footerMenuItems,
    isBotReadOnly: false,
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch): DispatchProps {
  return {
    onToggleCollapse: () => {
      dispatch(ShellActions.toggleCollapsed());
    },
    onToggleCanvasVisibility: () => {
      dispatch(ShellActions.toggleCanvasVisibility());
    },
  };
}

export const ShellSidebarContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ShellSidebar),
);
