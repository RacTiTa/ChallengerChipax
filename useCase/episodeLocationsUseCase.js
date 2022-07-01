import { getData } from "../repository/repository.js";
import {
  createObjectOfCharacter,
  getListOfCharacterLocation,
} from "../utils/utils.js";

export async function episodeLocationUseCase() {
  const initTime = new Date().getTime();

  const { locations, episodes, characters } = await getData();

  const objectOfCharacters = createObjectOfCharacter(characters);
  const listOfEpisodesWithLocation = episodes.map((episode) => {
    return {
      name: episode.name,
      episode: episode.episode,
      locations: getListOfCharacterLocation(
        episode.characters,
        objectOfCharacters
      ),
    };
  });

  const executionTime = new Date().getTime() - initTime;

  return {
    exercise_name: "Episode locations",
    time: `${Math.trunc(executionTime / 1000)}s ${executionTime % 1000}ms`,
    in_time: executionTime <= 3000 ? true : false,
    results: listOfEpisodesWithLocation,
  };
}
