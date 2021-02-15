export type PunkBeer = {
  id: number;
  image_url: string;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
};

export type punkBeer = {
  imgSrc: string;
  name: string;
  description: string;
  brewdate: string;
  tagline: string;
};

export async function getPunkBeer() {
  const response = await fetch(`https://api.punkapi.com/v2/beers/2`);
  const punkBeers = (await response.json()) as PunkBeer[];
  return punkBeers[0];
}
