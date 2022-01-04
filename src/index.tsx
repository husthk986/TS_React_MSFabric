import { initializeIcons } from "@uifabric/icons";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

initializeIcons();
ReactDOM.render(<App />, document.getElementById("root"));
