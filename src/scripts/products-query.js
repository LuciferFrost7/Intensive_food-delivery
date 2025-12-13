import restaurants from "./constants/restaurants.js";

function getRestaurantNumber() {
  const url = new URL(window.location.href);
  const query = url.searchParams.get("restaurant");

  return query;
}

function isCorrectQuery() {
  const restaurantNumber = getRestaurantNumber();

  if (!restaurantNumber) return false;

  if (isNaN(Number(restaurantNumber))) return false;

  return !(restaurantNumber > restaurants.length || restaurantNumber < 1);
}

if (!isCorrectQuery()) {
  const origin = window.location.origin;
  const pathname = window.location.pathname;

  const redirectHref = origin + pathname + "?restaurant=1";

  window.location.replace(redirectHref);
} else {
  const restaurantNumber = getRestaurantNumber() - 1;

  document.querySelector("#restaurant-name").textContent =
    restaurants[restaurantNumber].name;
  document.querySelector("#restaurant-rating").textContent =
    restaurants[restaurantNumber].rating;
  document.querySelector("#restaurant-price").textContent =
    "От " + restaurants[restaurantNumber].min_price + " ₽";
  document.querySelector("#restaurant-type").textContent =
    restaurants[restaurantNumber].type;

  document.title = "Delivery Food — " + restaurants[restaurantNumber].name;
}
