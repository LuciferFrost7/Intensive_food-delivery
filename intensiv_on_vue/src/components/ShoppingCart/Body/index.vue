<script>
import productsItems from "../../../constants/products.items.js";

function getRestaurantNumber() {
  const url = new URL(window.location.href);
  const query = url.searchParams.get("restaurant");

  return query;
}

function subFromCart(item) {
  const shoppingCartPointCount = document.querySelector(
    `#shopping-cart-point-${item.id}-count`
  );
  const shoppingCartTotal = document.querySelector("#shopping-cart-total");

  if (Number(shoppingCartPointCount.textContent) > 0) {
    shoppingCartPointCount.textContent =
      Number(shoppingCartPointCount.textContent) - 1;

    shoppingCartTotal.textContent =
      Number(shoppingCartTotal.textContent.split(" ")[0]) - item.price + " ₽";
  }
}

function addToCart(item) {
  const shoppingCartPointCount = document.querySelector(
    `#shopping-cart-point-${item.id}-count`
  );
  const shoppingCartTotal = document.querySelector("#shopping-cart-total");

  if (Number(shoppingCartPointCount.textContent) < 99) {
    shoppingCartPointCount.textContent =
      Number(shoppingCartPointCount.textContent) + 1;

    shoppingCartTotal.textContent =
      Number(shoppingCartTotal.textContent.split(" ")[0]) + item.price + " ₽";
  }
}

export default {
  data() {
    return {
      productsItems,
      getRestaurantNumber,
      subFromCart,
      addToCart,
    };
  },
};
</script>

<template>
  <div class="shopping-cart__body">
    <div
      class="shopping-cart__point"
      v-for="item in productsItems[getRestaurantNumber() - 1]"
      :key="item.id"
    >
      <div class="shopping-cart__point-info">
        <div class="shopping-cart__point-name">{{ item.name }}</div>
        <div class="shopping-cart__point-details">
          <p class="shopping-cart__point-price">{{ item.price }} ₽</p>
          <div class="shopping-cart__point-controls">
            <button class="shopping-cart__point-add" @click="addToCart(item)">
              +
            </button>
            <p
              class="shopping-cart__point-count"
              :id="`shopping-cart-point-${item.id}-count`"
            >
              0
            </p>
            <button class="shopping-cart__point-sub" @click="subFromCart(item)">
              -
            </button>
          </div>
        </div>
      </div>
      <hr class="shopping-cart__point-underline" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
