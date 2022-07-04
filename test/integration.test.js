const supertest = require("supertest");
const { app, server } = require("../index.js");

const api = supertest(app);

test("verificando que el endpoint tenga la respuesta de los 2 ejercicios.", async () => {
  const response = await api.get("/");
  expect(response.body).toHaveLength(2);
});

test("verificando la respuesta del primer ejercicio", async () => {
  const response = await api.get("/");
  const primerEj = response.body[0];
  expect(primerEj).toHaveProperty("exercise_name");
  expect(primerEj).toHaveProperty("time");
  expect(primerEj).toHaveProperty("in_time");
  expect(primerEj).toHaveProperty("results");
  expect(primerEj.results).toHaveLength(3);
});

test("verificando la respuesta del segundo ejercicio, que cada elemento dentro de cada locations sea unico.", async () => {
  const response = await api.get("/");
  const responseSecEj = response.body[1];
  expect(responseSecEj).toHaveProperty("exercise_name");
  expect(responseSecEj).toHaveProperty("time");
  expect(responseSecEj).toHaveProperty("in_time");
  expect(responseSecEj).toHaveProperty("results");

  responseSecEj.results.map((result) =>
    expect(result.locations).toHaveLength(new Set(result.locations).size)
  );
});

afterAll(() => {
  server.close();
});
