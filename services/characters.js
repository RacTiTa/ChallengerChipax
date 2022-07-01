import fetch from "node-fetch";

function fetchCharacters(numberOfPage = 1) {
  return fetch(
    `https://rickandmortyapi.com/api/character?page=${numberOfPage}`
  ).then((response) => response.json());
}

export function fetchAllCharacters() {
  return fetchCharacters().then(async (firstPage) => {
    const resultsOtherPages = await Promise.all(
      Array(firstPage.info.pages - 1)
        .fill()
        .map((e, index) =>
          fetchCharacters(index + 2).then((response) => response.results)
        )
    ).then((responses) => responses.flat());

    return [...firstPage.results, ...resultsOtherPages];
  });
}
