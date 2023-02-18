const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
const urlRegEx = new RegExp(
  "(?:https?)://(w+:?w*)?(S+)(:d+)?(/|/([w#!:.?+=&%!-/]))?"
);
const nickRegEx = new RegExp("^[0-9a-z]+$");
const CHARS_LENGTH = CHARS.length;
const STRINGS_RESERVEDS = ["not-found"];

export const stringIsInvalidUrl = (testString) => !urlRegEx.test(testString);
export const stringIsEmpty = (testString) => testString == "";
const stringIsReserved = (testString) => STRINGS_RESERVEDS.includes(testString);

export const stringIsInvalidNick = (testString) => {
  if (stringIsEmpty(testString)) return false;
  if (stringIsReserved(testString)) return true;

  testString = testString.replaceAll("-", "9");
  return !nickRegEx.test(testString);
};

export const getRandomNick = () => {
  let randomArr = [];

  for (var i = 0; i < 5; i++) {
    var randomIndex = Math.floor(Math.random() * CHARS_LENGTH);
    randomArr.push(CHARS[randomIndex]);
  }

  return randomArr.join("");
};
