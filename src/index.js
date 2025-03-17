import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import Router from "./routes/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "./config/toastConfig";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
      <ToastProvider />
    </QueryClientProvider>
  </Provider>
);

reportWebVitals();
