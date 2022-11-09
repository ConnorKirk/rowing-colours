const URL = "https://en.wikipedia.org/wiki/List_of_rowing_clubs";

const name = (node) => node.querySelector("td:nth-child(2)").innerText;
const wikiUrl = (node) => node.querySelector("td:nth-child(2) > a")?.href;
const imageUrl = (node) =>
  node
    .querySelector("td:nth-child(1) > a > img")
    ?.src.replace("thumb/", "")
    .replace(/\/170px-.*/, "");
const description = (node) => node.querySelector("td:nth-child(3)")?.innerText;

const clubs = Array.from(
  document.querySelectorAll("table.wikitable:nth-child(25) tr")
)
  .slice(1) // Skip the table header
  .map((node) => ({
    name: name(node),
    imageUrl: imageUrl(node),
    wikiUrl: wikiUrl(node),
    description: description(node),
  }))
  .filter(
    ({ name, imageUrl, wikiUrl, description }) =>
      console.log({ name, imageUrl, wikiUrl, description }) ||
      (name !== undefined &&
        imageUrl !== undefined &&
        description !== undefined)
  );

console.log(clubs);
