import React from "react";
import { hydrate } from "react-dom";
import App from "./components/App";

hydrate(<App reviews={window.__REVIEWS__} id={window.__ID__}/>, document.getElementById("reviews"));

