import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { Store } from "Redux/store";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

let persistor = persistStore(Store);

ReactDOM.render(
  <Provider store={Store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate>{" "} */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
