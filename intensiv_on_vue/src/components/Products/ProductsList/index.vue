<script>
import productsItems from "../../../constants/products.items.js";

function getRestaurantNumber() {
  const url = new URL(window.location.href);
  const query = url.searchParams.get("restaurant");

  return query;
}

export default {
  data() {
    return {
      productsItems,
      getRestaurantNumber,
    };
  },
};
</script>

<template>
  <ul id="products-list" class="products__list">
    <li
      class="products__card"
      v-for="item in productsItems[getRestaurantNumber() - 1]"
      :key="item.id"
      :id="item.id"
    >
      <img
        class="products__card-image"
        :src="item.image.src"
        :alt="item.image.alt"
      />
      <div class="products__card-details">
        <h2 class="products__card-name">{{ item.name }}</h2>
        <p class="products__card-ingredients">
          {{ item.ingredients.join(", ") + "." }}
        </p>
        <div class="products__card-order">
          <button class="products__card-add">В корзину</button>
          <p class="products__card-price">{{ item.price + " ₽" }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
