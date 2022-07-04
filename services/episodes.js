const fetch = require("node-fetch");

function fetchEpisodes(numberOfPage = 1) {
  return fetch(
    `https://rickandmortyapi.com/api/episode?page=${numberOfPage}`
  ).then((response) => response.json());
}

function fetchAllEpisodes() {
  return fetchEpisodes().then(async (firstPage) => {
    const resultsOtherPages = await Promise.all(
      Array(firstPage.info.pages - 1)
        .fill()
        .map((e, index) =>
          fetchEpisodes(index + 2).then((response) => response.results)
        )
    ).then((responses) => responses.flat());

    return [...firstPage.results, ...resultsOtherPages];
  });
}

module.exports = { fetchAllEpisodes };
