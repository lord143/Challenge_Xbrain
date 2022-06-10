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
        "",
        "https://http2.mlstatic.com/D_NQ_NP_820109-MLA43711683024_102020-O.webp",
        2399.0
      ),
      new ProductItem(
        2,
        "Notebook Hp 250 G8 15.6 Hd I3-1005g1 500gb 4gb Win10 Pro",
        "",
        "https://http2.mlstatic.com/D_NQ_NP_916214-MLB49900551495_052022-O.webp",
        35.0
      ),
      new ProductItem(
        3,
        "JavaScript",
        "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        35.0
      ),
      new ProductItem(
        4,
        "JavaScript",
        "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        35.0
      ),
      new ProductItem(
        5,
        "JavaScript",
        "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        35.0
      ),
      new ProductItem(
        6,
        "JavaScript",
        "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
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
  