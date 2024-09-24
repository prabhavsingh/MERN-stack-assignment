import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import Blogs from "./components/Blogs";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UserForm />,
      },
      {
        path: "/users",
        element: <UserTable />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
