require("module-alias/register");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const middlewareConfig = require("@/middleware");
const PORT = process.env.PORT || 5010;

const app = express();
middlewareConfig(app);

mongoose
  .connect(process.env.CLUSTER_SIGNIN_URL)
  .then(() => console.log("Database Connected."))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`${process.env.NODE_ENV || "Development"} server started`));
