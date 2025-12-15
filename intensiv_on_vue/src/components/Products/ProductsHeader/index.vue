<script>
import starImage from "@images/pins/star.svg";
import restaurants from "@/constants/restaurants.items.js";

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

const origin = window.location.origin;
const pathname = window.location.pathname;

if (pathname == "/restaurants") {
  if (!isCorrectQuery()) {
    const redirectHref = "/restaurants?restaurant=1";

    window.location.replace(redirectHref);
  }

  const restaurant = restaurants[getRestaurantNumber() - 1];
  document.title = "Delivery Food — " + restaurant.name;
}

export default {
  data() {
    return {
      starImage,
      restaurants,
      getRestaurantNumber,
    };
  },
};
</script>

<template>
  <div class="products__header">
    <h1 id="restaurant-name" class="products__header-title">
      {{ restaurants[getRestaurantNumber() - 1].name }}
    </h1>
    <div class="products__header-details">
      <div class="products__header-rating">
        <img
          :src="starImage"
          alt="Delivery Food Stars"
          class="products__header-star"
        />
        <p id="restaurant-rating" class="products__header-points">
          {{ restaurants[getRestaurantNumber() - 1].rating }}
        </p>
      </div>
      <p id="restaurant-price" class="products__header-price">
        От {{ restaurants[getRestaurantNumber() - 1].min_price }} ₽
      </p>
      <p id="restaurant-type" class="products__header-type">
        {{ restaurants[getRestaurantNumber() - 1].type }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
