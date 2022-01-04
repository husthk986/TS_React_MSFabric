import { Fabric } from "office-ui-fabric-react";
import * as React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { ShellContentContainer } from "./shell/ShellContentContainer";
import { ShellFooterContainer } from "./shell/ShellFooterContainer";
import { ShellHeaderContainer } from "./shell/ShellHeaderContainer";
import { ShellSidebarContainer } from "./shell/ShellSidebarContainer";
import { store } from "./store";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <HashRouter>
        <Provider store={store}>
          <Fabric className="App">
            <div className="Header">
              <ShellHeaderContainer />
            </div>
            <div className="Body">
              <div className="Content">
                <ShellContentContainer />
              </div>
              <div className="Sidebar">
                <ShellSidebarContainer />
              </div>
            </div>
            <div className="Footer">
              <ShellFooterContainer />
            </div>
          </Fabric>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
