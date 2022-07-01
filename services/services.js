import fetch from "node-fetch";

export function getFirstPage(array) {
  array = array.map((e) =>
    fetch(`https://rickandmortyapi.com/api/${e}`).then((response) =>
      response.json()
    )
  );
  return Promise.all(array).then((responses) =>
    responses.map((response) => response)
  );
}

export function getRestInfo(string, pageNumber) {
  const fetchArray = [];
  for (let i = 2; i <= pageNumber; i++) {
    fetchArray.push(
      fetch(`https://rickandmortyapi.com/api/${string}?page=${i}`).then(
        (response) => response.json()
      )
    );
  }

  return Promise.all(fetchArray)
    .then((responses) => responses.map((response) => response.results))
    .then((responses) => responses.flat())
    .catch((e) => console.log(e));
}
