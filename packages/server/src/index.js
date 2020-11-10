import express from "express";
import path from "path";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./api";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

require("./config/sequelize");

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api", api);

app.use(express.static(path.join(__dirname, "../../client/build")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname + "../../client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
