import "./punk-beer.css";
import { createCard } from "./punk-beer";
import { createElement } from "../../utils/createElements";
import { getPunkBeer } from "../../utils/api";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

//   const container = createElement("article",{
//     className: "container",
//     childs: characters.map((character) => createCard(character)),
//    });

//    return container;

//  };

//_________________________________________________________________________________

export const PunkBeerFromAPI = (args, { loaded: { beer } }) => {
  console.log(beer);
  return createCard(beer);
};

PunkBeerFromAPI.loaders = [
  async () => ({
    beer: await getPunkBeer(),
  }),
];

// export const PunkBeerFromAPI = (args, { loaded: { characters } }) => {
//   const container = createElement("article", {
//     className: "container",
//     childs: characters.map((character) => createCard(character)),
//   });
//   return container;
// };

// PunkBeerFromAPI.loaders = [
//   async () => ({
//     beers: await getPunkBeer(),
//   }),
// ];

export const singleBeer = () => {
  return createCard({
    image_url: "https://images.punkapi.com/v2/keg.png",
    name: "fabiansBeer",
    description: "",
    first_brewed: "",
    tagline: "",
  });
};
