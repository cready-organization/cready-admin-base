import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import App from "./app/App";
import { store } from "./app/store";
import "./packages/font-awesome-v6.2/css/all.css";
import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
