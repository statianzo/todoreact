import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./todo/app";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import page from "page";

const root = createRoot(document.getElementById("root"));

page('*', ({path}) => {
  root.render(<App route={path}/>);
});


page.start();
