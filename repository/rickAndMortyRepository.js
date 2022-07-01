import { fetchAllCharacters } from "../services/characters.js";
import { fetchAllEpisodes } from "../services/episodes.js";
import { fetchAllLocations } from "../services/locations.js";

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

export default { getData };
