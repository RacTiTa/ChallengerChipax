const RickAndMortyRepository = require("../repository/rickAndMortyRepository.js");
const { letterCountInAWord } = require("../utils/utils.js");

async function charCounterUseCase() {
  const initTime = new Date().getTime();

  const { locations, episodes, characters } =
    await RickAndMortyRepository.getData();

  const caracterCountInLocations = countLetterFrom(locations, "l");
  const caracterCountInChacters = countLetterFrom(characters, "c");
  const caracterCountInEpisode = countLetterFrom(episodes, "e");

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

function countLetterFrom(array, letter) {
  const caracterCountInLocations = array.reduce(
    (acum, location) => (acum += letterCountInAWord(location.name, letter)),
    0
  );

  return caracterCountInLocations;
}

module.exports = { charCounterUseCase };
