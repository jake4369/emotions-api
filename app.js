const express = require("express");
const cors = require("cors");

const emotionsRouter = require("./routes/emotionsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/emotions", emotionsRouter);

module.exports = app;
