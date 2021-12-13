import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/home";
import Statistic from "./pages/statistic";
import Plan from "./pages/plan";
import Exercise from "./pages/exercise";
import Settings from "./pages/settings";
import PlanDetail from "./pages/plan-detail";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="statistic" element={<Statistic />} />
        <Route path="plan" element={<Plan />} />
        <Route path="plan-detail/:id" element={<PlanDetail />} />
        <Route path="exercise" element={<Exercise />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
