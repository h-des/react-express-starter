import express from "express";
import path from "path";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./api";

const app = express();
dotenv.config();

require("./config/sequelize");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(bodyParser.json());
app.use("/api", api);

app.use(express.static(path.join(__dirname, "../../client/build")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname + "../../client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
