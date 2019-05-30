import express from "express";
import App from "../components/App";
import React from "react";
import { renderToString } from "react-dom/server";
import hbs from "handlebars";
import models from "../server/models/index";

const router = express.Router();


router.get("/:id", async (req, res) => {
  models.reviews.get(req.params.id, response => {
    res.send(response);
  });
});

router.get("/", async (req, res) => {
  const theHtml = `
    <html>
    <head><title>Reviews</title></head>
    <body>
    <div></div>
    <div id="reviews"></div>
    <script src="/app.js" charset="utf-8"></script>
    <script src="/vendor.js" charset="utf-8"></script>
    </body>
    </html>
    `;
  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(<App />);
  const htmlToSend = hbsTemplate({ reviews: reactComp });
  res.send(htmlToSend);
});

router.post("/:id", (req, res) => {
  console.log()
  models.reviews.post(req.body, response => {
    res.status(201).send(response);
  });
});

export default router;
