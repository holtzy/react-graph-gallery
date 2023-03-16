export const data = [
  "Hello",
  "world",
  "normally",
  "you",
  "want",
  "more",
  "words",
  "than",
  "this",
].map(function (d) {
  return { text: d, value: 10 + Math.random() * 90 };
});
