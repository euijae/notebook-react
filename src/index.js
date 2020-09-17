import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Notebook from "./Notebook";

ReactDOM.render(
  <Provider store={store}>
    <Notebook />
  </Provider>,
  document.getElementById("root")
);
