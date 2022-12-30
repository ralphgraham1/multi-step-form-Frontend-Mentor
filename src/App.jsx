import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfo from "./components/personal-info";
import Plan from "./components/plan";
import AddOns from "./components/add-ons";
import Summary from "./components/summary";
import NotFound from "./components/not-found";
import Navigations from "./constants/navigations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigations />}>
        <Route index element={<PersonalInfo />} />
        <Route path="plan" element={<Plan />} />
        <Route path="addon" element={<AddOns />} />
        <Route path="summary" element={<Summary />} />
        <Route path="notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
