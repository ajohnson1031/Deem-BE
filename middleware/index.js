const express = require("express");
const helmet = require("helmet");
const authRouter = require("@/routes/auth");

module.exports = (app) => {
  app.use(express.json());
  app.use(helmet());
  app.use(authRouter);
};
