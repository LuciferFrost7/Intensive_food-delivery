import products from "./constants/products.js";

const productsList = document.querySelector("#products-list");
const shoppingCartBody = document.querySelector(".shopping-cart__body");
const shoppingCartTotal = document.querySelector("#shopping-cart-total");

function createProductCard(productElement) {
  /*
    <li id="" class="products__card">
      <img src="" alt="" class="products__card-image" />
      <div class="products__card-details">
        <h2 class="products__card-name"></h2>
        <p class="products__card-ingredients"></p>
        <div class="products__card-order">
          <button class="products__card-add"></button>
          <p class="products__card-price"></p>
        </div>
      </div>
    </li>
*/
  const productCard = document.createElement("li");
  productCard.className = "products__card";
  productCard.id = productElement.id;

  const productCardImage = document.createElement("img");
  productCardImage.src = productElement.image.src;
  productCardImage.alt = productElement.image.alt;
  productCardImage.className = "products__card-image";

  // card-details
  const productCardDetails = document.createElement("div");
  productCardDetails.className = "products__card-details";

  const productsCardName = document.createElement("h2");
  productsCardName.className = "products__card-name";
  productsCardName.textContent = productElement.name;

  const productsCardIngredients = document.createElement("p");
  productsCardIngredients.className = "products__card-ingredients";
  productsCardIngredients.textContent =
    productElement.ingredients.join(", ") + ".";

  // card-order
  const productsCardOrder = document.createElement("div");
  productsCardOrder.className = "products__card-order";

  const productsCardAddButton = document.createElement("button");
  productsCardAddButton.className = "products__card-add";
  productsCardAddButton.textContent = "В корзину";
  productsCardAddButton.addEventListener("click", () => {});

  const productsCardCart = document.createElement("img");
  productsCardCart.className = "products__card-cart";
  productsCardCart.src = "./src/images/pins/shopping-cart.svg";
  productsCardCart.alt = "Food Delivery shopping cart";

  productsCardAddButton.appendChild(productsCardCart);

  const productsCardType = document.createElement("p");
  productsCardType.className = "products__card-price";
  productsCardType.textContent = `${productElement.price} ₽`;

  productsCardOrder.appendChild(productsCardAddButton);
  productsCardOrder.appendChild(productsCardType);

  productCardDetails.appendChild(productsCardName);
  productCardDetails.appendChild(productsCardIngredients);
  productCardDetails.appendChild(productsCardOrder);

  productCard.appendChild(productCardImage);
  productCard.appendChild(productCardDetails);

  return productCard;
}

function createProductInShoppingCart(productElement) {
  /*
  <div class="shopping-cart__point">
    <div class="shopping-cart__point-info">
      <div class="shopping-cart__point-name">aboba</div>
      <div class="shopping-cart__point-details">
        <p class="shopping-cart__point-price">250 p</p>
        <div class="shopping-cart__point-controls">
          <button class="shopping-cart__point-add">+</button>
          <p class="shopping-cart__point-count">0</p>
          <button class="shopping-cart__point-sub">-</button>
        </div>
      </div>
    </div>
    <hr class="shopping-cart__point-underline" />
  </div>
  */
  const shoppingCartPoint = document.createElement("div");

  // point-info
  const shoppingCartPointInfo = document.createElement("div");
  shoppingCartPointInfo.className = "shopping-cart__point-info";

  const shoppingCartPointName = document.createElement("p");
  shoppingCartPointName.className = "shopping-cart__point-name";
  shoppingCartPointName.textContent = productElement.name;

  // point-details
  const shoppingCartPointDetails = document.createElement("div");
  shoppingCartPointDetails.className = "shopping-cart__point-details";

  const shoppingCartPointPrice = document.createElement("p");
  shoppingCartPointPrice.className = "shopping-cart__point-price";
  shoppingCartPointPrice.textContent = `${productElement.price} ₽`;

  // point-controls
  const shoppingCartPointControls = document.createElement("div");
  shoppingCartPointControls.className = "shopping-cart__point-controls";

  const shoppingCartPointCount = document.createElement("p");
  shoppingCartPointCount.className = "shopping-cart__point-count";
  shoppingCartPointCount.id = `shopping-cart-point-${productElement.id}-count`;
  shoppingCartPointCount.textContent = "0";

  const shoppingCartPointAddButton = document.createElement("button");
  shoppingCartPointAddButton.className = "shopping-cart__point-add";
  shoppingCartPointAddButton.textContent = "+";
  shoppingCartPointAddButton.addEventListener("click", () => {
    if (Number(shoppingCartPointCount.textContent) < 99) {
      shoppingCartPointCount.textContent =
        Number(shoppingCartPointCount.textContent) + 1;

      shoppingCartTotal.textContent =
        Number(shoppingCartTotal.textContent.split(" ")[0]) +
        productElement.price +
        " ₽";
    }
  });

  const shoppingCartPointSubButton = document.createElement("button");
  shoppingCartPointSubButton.className = "shopping-cart__point-sub";
  shoppingCartPointSubButton.textContent = "-";
  shoppingCartPointSubButton.addEventListener("click", () => {
    if (Number(shoppingCartPointCount.textContent) > 0) {
      shoppingCartPointCount.textContent =
        Number(shoppingCartPointCount.textContent) - 1;

      shoppingCartTotal.textContent =
        Number(shoppingCartTotal.textContent.split(" ")[0]) -
        productElement.price +
        " ₽";
    }
  });

  shoppingCartPointControls.appendChild(shoppingCartPointAddButton);
  shoppingCartPointControls.appendChild(shoppingCartPointCount);
  shoppingCartPointControls.appendChild(shoppingCartPointSubButton);

  shoppingCartPointDetails.appendChild(shoppingCartPointPrice);
  shoppingCartPointDetails.appendChild(shoppingCartPointControls);

  shoppingCartPointInfo.appendChild(shoppingCartPointName);
  shoppingCartPointInfo.appendChild(shoppingCartPointDetails);

  const shoppingCartPointUnderline = document.createElement("hr");
  shoppingCartPointUnderline.className = "shopping-cart__point-underline";

  shoppingCartPoint.appendChild(shoppingCartPointInfo);
  shoppingCartPoint.appendChild(shoppingCartPointUnderline);

  return shoppingCartPoint;
}

const url = new URL(window.location.href);
const restaurantId = url.searchParams.get("restaurant") - 1;

products[restaurantId].forEach((product) => {
  const productCard = createProductCard(product);
  const shoppingCardPoint = createProductInShoppingCart(product);

  productsList.appendChild(productCard);
  shoppingCartBody.appendChild(shoppingCardPoint);
});
