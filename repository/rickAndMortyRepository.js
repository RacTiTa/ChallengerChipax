const { fetchAllCharacters } = require("../services/characters.js");
const { fetchAllEpisodes } = require("../services/episodes.js");
const { fetchAllLocations } = require("../services/locations.js");

let result = false;
async function getData() {
  if (result) return result;

  const promises = [
    fetchAllLocations(),
    fetchAllEpisodes(),
    fetchAllCharacters(),
  ];

  const [locations, episodes, characters] = await Promise.all(promises);

  result = {
    locations,
    episodes,
    characters,
  };

  return result;
}

module.exports = { getData };
