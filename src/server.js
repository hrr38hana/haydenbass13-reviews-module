import express from "express";
import compression from "compression";
import ssr from "./routes/ssr";
import bodyParser from 'body-parser'
import ignoreFavicon from './server/middleware/favicon'
const app = express();

app.use(ignoreFavicon)
app.use(compression());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", ssr);


const port = process.env.PORT || 3030;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});
