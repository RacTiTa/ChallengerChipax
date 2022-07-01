import { getFirstPage, getRestInfo } from "../services/services.js";

export async function getData() {
  const [locations, episodes, characters] = await getFirstPage([
    "location",
    "episode",
    "character",
  ]);

  const {
    results: locationsResults,
    info: { pages: locationsPages },
  } = locations;

  const {
    results: episodesResults,
    info: { pages: episodesPages },
  } = episodes;

  const {
    results: characterResults,
    info: { pages: characterPages },
  } = characters;

  const array = [
    getRestInfo("location", locationsPages),
    getRestInfo("episode", episodesPages),
    getRestInfo("character", characterPages),
  ];


  const [restLocation, restEpisode, restCharacter] = await Promise.all(array);
  locationsResults.push(...restLocation);
  episodesResults.push(...restEpisode);
  characterResults.push(...restCharacter);

  return {
    locations: locationsResults,
    episodes: episodesResults,
    characters: characterResults,
  };
}
