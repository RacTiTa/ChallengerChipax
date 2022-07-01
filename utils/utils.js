export function letterCountInAWord(string, letter) {
  return string
    .toLowerCase()
    .split("")
    .reduce((acum, a) => (a == letter ? ++acum : acum), 0);
}

export function createObjectOfCharacter(arrayOfCharacters) {
  return arrayOfCharacters.reduce((acum, character) => {
    acum[character.id] = character.origin.name;
    return acum;
  }, {});
}

const getCharacterLocation = (urlOfCharacter, objectOfCharacters) =>
  objectOfCharacters[urlOfCharacter.split("/").slice(-1)[0]];

export function getListOfCharacterLocation(
  listOfCharacter,
  objectOfCharacters
) {
  const existingLocations = {};
  return listOfCharacter.reduce((acum, character) => {
    if (
      existingLocations[getCharacterLocation(character, objectOfCharacters)]
    ) {
      return acum;
    } else {
      existingLocations[
        getCharacterLocation(character, objectOfCharacters)
      ] = true;
      acum.push(getCharacterLocation(character, objectOfCharacters));
      return acum;
    }
  }, []);
}
