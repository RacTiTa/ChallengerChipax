export function letterCountInAWord(word, letter) {
  return word
    .toLowerCase()
    .split("")
    .reduce((acum, a) => (a == letter ? ++acum : acum), 0);
}
