import products from "./constants/products.js";
import restaurants from "./constants/restaurants.js";

const restaurantName = document.querySelector("#restaurant-name");
const restaurantType = document.querySelector("#restaurant-type");
const restaurantPrice = document.querySelector("#restaurant-price");
const restaurantRating = document.querySelector("#restaurant-rating");

const productsList = document.querySelector("#products-list");

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

restaurantName.textContent = restaurants[2].name;
restaurantType.textContent = restaurants[2].type;
restaurantPrice.textContent = "От " + restaurants[2].min_price + " ₽";
restaurantRating.textContent = restaurants[2].rating;

products["id2"].forEach((product) => {
  const productCard = createProductCard(product);
  productsList.appendChild(productCard);
});
