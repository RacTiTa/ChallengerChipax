import express from "express";
import { charCounterUseCase } from "./useCase/charCounterUseCase.js";
import { episodeLocationUseCase } from "./useCase/episodeLocationsUseCase.js";

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
  res.json(result);
});

app.listen(port, () => console.log(`server is runing on port ${port}`));
