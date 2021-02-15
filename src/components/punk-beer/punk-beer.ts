import { createElement } from "../../utils/createElements";

export function createCard({
  image_url,
  name,
  description,
  first_brewed,
  tagline,
}) {
  return createElement("article", {
    className: "flip_card",
    childs: [
      createElement("div", {
        className: "flip_card_inner",
        childs: [
          createElement("div", {
            className: "flip_card_front",
            childs: [
              createElement("img", {
                className: "card_portrait",
                src: image_url,
              }),

              createElement("div", {
                className: "card__info",
                childs: [
                  createElement("h2", {
                    className: "info__name",
                    innerText: name,
                  }),

                  createElement("p", {
                    className: "card__status",
                    innerText: description,
                  }),

                  createElement("p", {
                    className: "card__species",
                    innerText: first_brewed,
                  }),

                  createElement("p", {
                    className: "card__tagline",
                    innerText: tagline,
                  }),
                ],
              }),
            ],
          }),
          createElement("div", {
            className: "card__back",
            childs: [
              createElement("p", {
                innerText:
                  "Some random BS i chose over lorem because if have fu'ed humor.",
              }),
              createElement("p", {
                innerText: "Just some more BS to try something out.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
