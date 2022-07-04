const fetch = require("node-fetch");

function fetchLocation(numberOfPage = 1) {
  return fetch(
    `https://rickandmortyapi.com/api/location?page=${numberOfPage}`
  ).then((response) => response.json());
}

function fetchAllLocations() {
  return fetchLocation(1).then(async (firstPage) => {
    const resultsOtherPages = await Promise.all(
      Array(firstPage.info.pages - 1)
        .fill()
        .map((e, index) =>
          fetchLocation(index + 2).then((response) => response.results)
        )
    ).then((responses) => responses.flat());

    return [...firstPage.results, ...resultsOtherPages];
  });
}

module.exports = { fetchAllLocations };
