const quote = [
  "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
  "The price of anything is the amount of life you exchange for it.",
  "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
  "God save me from my friends. I can protect myself from my enemies.",
  "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
  "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
];

const author = [
  "Charles Lindbergh",
  "David Thoreau",
  "Life",
  "Claude Louis Hector De Villars",
  "John Kenneth Galbraith",
  "Tyne Daly",
];

const button = document.querySelector(".btn");
const quoteContent = document.querySelector(".quote");
const authorContent = document.querySelector(".author");

button.addEventListener("click", () => {
  let num = Math.floor(Math.random() * 6);

  quoteContent.textContent = quote[num];
  authorContent.textContent = author[num];
});
