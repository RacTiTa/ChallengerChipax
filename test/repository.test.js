const rickAndMortyRepository = require("../repository/rickAndMortyRepository.js");

test("repository test", async () => {
  const result = await rickAndMortyRepository.getData();

  expect(result).toHaveProperty("characters");
  expect(result).toHaveProperty("episodes");
  expect(result).toHaveProperty("locations");
  expect(Object.keys(result)).toHaveLength(3);
});
