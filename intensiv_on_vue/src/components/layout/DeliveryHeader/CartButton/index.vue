<script>
import cartImage from "@images/pins/shopping-cart.svg";
import changeVisibleShoppingCart from "@/utils/change-cart-visible.utils.js";

export default {
  data() {
    return {
      cartImage,
      changeVisibleShoppingCart,
    };
  },
};
</script>

<template>
  <button class="cart-button" @click="changeVisibleShoppingCart()">
    <img
      :src="cartImage"
      alt="Delivery Food Shopping Cart"
      class="cart-button__image"
    />
    <p class="cart-button__text">Корзина</p>
  </button>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
