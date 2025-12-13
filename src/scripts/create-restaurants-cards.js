import restaurants from "./constants/restaurants.js";

const STAR_PATH = "./src/images/pins/star.svg";
const restaurantsList = document.querySelector("#restaurants-list");

function createRestaurantCard(foodElement) {
  /* Create HTML element
  <li class="restaurants__card">
  <a class="restaurants__card-link" href="/restaurant.html?restaurant=">
    <img class="restaurants__card-image" src="" alt="" />
    <div class="restaurants__card-info">
      <div class="restaurants__card-header">
        <h3 class="restaurants__card-name"></h3>
        <p class="restaurants__card-time"></p>
      </div>
      <div class="restaurants__card-details">
        <div class="restaurants__card-rating">
          <img class="restaurants__card-star" src="" alt="" />
          <p class="restaurants__card-points"></p>
        </div>
        <p class="restaurants__card-price"></p>
        <p class="restaurants__card-type"></p>
      </div>
    </div>
    </a>
  </li>
  */
  const restaurantsCard = document.createElement("li");
  restaurantsCard.className = "restaurants__card";
  restaurantsCard.id = `restaurants-card-${foodElement.id}`;

  // card-link
  const restaurantsCardLink = document.createElement("a");
  restaurantsCardLink.className = "restaurants__card-link";
  restaurantsCardLink.href = `/restaurant.html?restaurant=${foodElement.id}`;

  const restaurantsCardImage = document.createElement("img");
  restaurantsCardImage.className = "restaurants__card-image";
  restaurantsCardImage.src = foodElement.image.src;
  restaurantsCardImage.alt = foodElement.image.alt;

  // card-info
  const restaurantsCardInfo = document.createElement("div");
  restaurantsCardInfo.className = "restaurants__card-info";

  // card-header
  const restaurantsCardHeader = document.createElement("div");
  restaurantsCardHeader.className = "restaurants__card-header";

  const restaurantsCardName = document.createElement("h3");
  restaurantsCardName.className = "restaurants__card-name";
  restaurantsCardName.textContent = foodElement.name;

  const restaurantsCardTime = document.createElement("p");
  restaurantsCardTime.className = "restaurants__card-time";
  restaurantsCardTime.textContent = `${foodElement.time} мин`;

  restaurantsCardHeader.appendChild(restaurantsCardName);
  restaurantsCardHeader.appendChild(restaurantsCardTime);

  // card-details
  const restaurantsCardDetails = document.createElement("div");
  restaurantsCardDetails.className = "restaurants__card-details";

  const restaurantsCardRating = document.createElement("div");
  restaurantsCardRating.className = "restaurants__card-rating";

  const restaurantsCardStar = document.createElement("img");
  restaurantsCardStar.className = "restaurants__card-star";
  restaurantsCardStar.src = STAR_PATH;
  restaurantsCardStar.alt = "Delivery Food Stars";

  const restaurantsCardPoints = document.createElement("p");
  restaurantsCardPoints.className = "restaurants__card-points";
  restaurantsCardPoints.textContent = foodElement.rating;

  restaurantsCardRating.appendChild(restaurantsCardStar);
  restaurantsCardRating.appendChild(restaurantsCardPoints);

  const restaurantsCardPrice = document.createElement("p");
  restaurantsCardPrice.className = "restaurants__card-price";
  restaurantsCardPrice.textContent = `От ${foodElement.min_price} ₽`;

  const restaurantsCardType = document.createElement("p");
  restaurantsCardType.className = "restaurants__card-type";
  restaurantsCardType.textContent = foodElement.type;

  restaurantsCardDetails.appendChild(restaurantsCardRating);
  restaurantsCardDetails.appendChild(restaurantsCardPrice);
  restaurantsCardDetails.appendChild(restaurantsCardType);

  restaurantsCardInfo.appendChild(restaurantsCardHeader);
  restaurantsCardInfo.appendChild(restaurantsCardDetails);

  restaurantsCardLink.appendChild(restaurantsCardImage);
  restaurantsCardLink.appendChild(restaurantsCardInfo);

  restaurantsCard.appendChild(restaurantsCardLink);

  return restaurantsCard;
}

restaurants.forEach((rest) => {
  const restaurantCard = createRestaurantCard(rest);
  restaurantsList.appendChild(restaurantCard);
});
