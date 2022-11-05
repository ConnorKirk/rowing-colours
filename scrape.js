const URL = "https://en.wikipedia.org/wiki/List_of_rowing_clubs";

const club = (node) => node.querySelector("td:nth-child(2) a");
const imageUrl = (node) => node.querySelector("td:nth-child(1) > a img")?.src;
const description = (node) => node.querySelector("td:nth-child(3)")?.innerText;

const clubs = Array.from(
  document.querySelectorAll("table.wikitable:nth-child(25) tr")
)
  .slice(1) // Skip the table header
  .map(
    (node) =>
      console.log(node) || {
        name: club(node)?.innerText,
        imageUrl: imageUrl(node),
        wikiUrl: club(node)?.href,
        description: description(node),
      }
  );

console.log(clubs);
