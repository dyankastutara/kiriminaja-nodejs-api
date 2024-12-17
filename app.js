require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.set("port", process.env.PORT || "3000");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

app.listen(app.get("port"), (error) => {
  if (error) {
    console.log("Error during app startup", error);
  }
  console.log("Application Start in port " + app.get("port"));
});
