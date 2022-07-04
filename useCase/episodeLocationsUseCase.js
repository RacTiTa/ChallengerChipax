const rickAndMortyRepository = require("../repository/rickAndMortyRepository.js");

async function episodeLocationUseCase() {
  const initTime = new Date().getTime();

  const { episodes, characters } = await rickAndMortyRepository.getData();
  const objectOfCharacters = getLocationByCharacter(characters);
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

function getLocationByCharacter(characters) {
  return characters.reduce((acum, character) => {
    acum[character.id] = character.origin.name;
    return acum;
  }, {});
}

const getListOfCharacterLocation = (listOfCharacter, characterLocatios) => {
  const getCharacterId = (characterUrl) => characterUrl.split("/").slice(-1)[0];

  const getCharacterLocation = (characterUrl) =>
    characterLocatios[getCharacterId(characterUrl)];

  const existingLocations = {};
  return listOfCharacter.reduce((acum, character) => {
    if (existingLocations[getCharacterLocation(character)]) {
      return acum;
    } else {
      existingLocations[getCharacterLocation(character)] = true;
      acum.push(getCharacterLocation(character));
      return acum;
    }
  }, []);
};

module.exports = { episodeLocationUseCase };
