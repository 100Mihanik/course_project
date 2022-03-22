import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";

import App from "./App";
import StyleWrapper from "./StyleWrapper";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <StyleWrapper>
      <App />
    </StyleWrapper>
  </Provider>,
  // </React.StrictMode>
  document.getElementById("root")
);

reportWebVitals();
