import express from "express";
import path from "path";

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "../../client/build")));

// An api endpoint that returns a short list of items
app.get("/api/getList", (_req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

// Handles any requests that don't match the ones above
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname + "../../client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
