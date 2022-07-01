import { getData } from "../repository/repository.js";
import { letterCountInAWord } from "../utils/utils.js";

export async function charCounterUseCase() {
  const initTime = new Date().getTime();

  const { locations, episodes, characters } = await getData();

  const caracterCountInLocations = locations.reduce(
    (acum, location) => (acum += letterCountInAWord(location.name, "l")),
    0
  );

  const caracterCountInChacters = characters.reduce(
    (acum, character) => (acum += letterCountInAWord(character.name, "c")),
    0
  );
  const caracterCountInEpisode = episodes.reduce(
    (acum, episode) => (acum += letterCountInAWord(episode.name, "e")),
    0
  );

  const executionTime = new Date().getTime() - initTime;

  return {
    exercise_name: "Char counter",
    time: `${Math.trunc(executionTime / 1000)}s ${executionTime % 1000}ms`,
    in_time: executionTime <= 3000 ? true : false,
    results: [
      {
        char: "l",
        count: caracterCountInLocations,
        resource: "location",
      },
      {
        char: "e",
        count: caracterCountInEpisode,
        resource: "episode",
      },
      {
        char: "c",
        count: caracterCountInChacters,
        resource: "character",
      },
    ],
  };
}
