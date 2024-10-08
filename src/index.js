import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,  Route, Routes } from "react-router-dom";

import { App } from "./todo/app";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<App />} />
        </Routes>
    </BrowserRouter>,
);
