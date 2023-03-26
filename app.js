const express = require("express");

const emotionsRouter = require("./routes/emotionsRoutes");

const app = express();

app.use("/api/v1/emotions", emotionsRouter);

module.exports = app;
