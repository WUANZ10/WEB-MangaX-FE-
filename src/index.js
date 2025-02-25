import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import Router from "./routes/Router";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <Provider store={store}>
//       <App />
//     </Provider>
// );

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
