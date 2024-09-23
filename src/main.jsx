import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
// import Hero from "./components/Hero/Hero.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import Content from "./components/content/Content.jsx";
import { useParams } from "react-router-dom";
import Starredmails from "./components/Starredmails/Starredmails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<></>} />
      <Route path="/content/:id" element={<Content />} />
      <Route path="/inbox" element={<></>} />
      <Route path="/starred" element={<Starredmails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
