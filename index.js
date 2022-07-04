const express = require("express");
const { charCounterUseCase } = require("./useCase/charCounterUseCase.js");
const {
  episodeLocationUseCase,
} = require("./useCase/episodeLocationsUseCase.js");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const response = async () => {
    const result = [];
    const charCounter = await charCounterUseCase();
    const episodeLocation = await episodeLocationUseCase();

    result.push(charCounter);
    result.push(episodeLocation);

    return result;
  };
  const result = await response();
  res.status(200).json(result);
});

const server = app.listen(port, () =>
  console.log(`server is runing on port ${port}`)
);

module.exports = { app, server };
