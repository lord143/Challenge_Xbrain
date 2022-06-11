export class ProductItem {
    constructor(id, title, description, image, price) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.image = image;
      this.price = price;
    }
  }
  
  const INITIAL_STATE = {
    items: [
      new ProductItem(
        1,
        "Iphone X",
        "This is a media card. You can use this section to describe the content.",
        "https://http2.mlstatic.com/D_NQ_NP_820109-MLA43711683024_102020-O.webp",
        2399.0
      ),
      new ProductItem(
        2,
        "teste 2",
        "This is a media card. You can use this section to describe the content.",
        "https://http2.mlstatic.com/D_NQ_NP_820109-MLA43711683024_102020-O.webp",
        35.0
      ),
      new ProductItem(
        3,
        "Teste 3",
        "This is a media card. You can use this section to describe the content.",
        "https://http2.mlstatic.com/D_NQ_NP_820109-MLA43711683024_102020-O.webp",
        35.0
      ),
      new ProductItem(
        4,
        "teste 4",
        "This is a media card. You can use this section to describe the content.",
        "https://http2.mlstatic.com/D_NQ_NP_820109-MLA43711683024_102020-O.webp",
        35.0
      ),
      new ProductItem(
        5,
        "teste 5",
        "This is a media card. You can use this section to describe the content.",
        "https://http2.mlstatic.com/D_NQ_NP_820109-MLA43711683024_102020-O.webp",
        35.0
      ),
      new ProductItem(
        6,
        "teste 6",
        "This is a media card. You can use this section to describe the content.",
        "https://http2.mlstatic.com/D_NQ_NP_820109-MLA43711683024_102020-O.webp",
        35.0
      ),
    ],
  };
  
  export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
  
  export const productsSelector = (state) => state.products.items;
  