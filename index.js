import express from "express";
import { charCounterUseCase } from "./useCase/charCounterUseCase.js";
import { episodeLocationUseCase } from "./useCase/episodeLocationsUseCase.js";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const response = async () => {
    const result = [];

    result.push(await charCounterUseCase());

    result.push(await episodeLocationUseCase());

    return result;
  };

  res.json(await response());
});

app.listen(port, () => console.log(`server is runing on port ${port}`));
