<script>
import changeVisibleShoppingCart from "@/utils/change-cart-visible.utils.js";
import closeButton from "@images/pins/close.svg";

export default {
  data() {
    return { changeVisibleShoppingCart, closeButton };
  },
};
</script>

<template>
  <div class="shopping-cart__header">
    <h2 class="shopping-cart__title">Корзина</h2>
    <button
      id="shopping-cart-close-button"
      class="shopping-cart__close-button"
      @click="changeVisibleShoppingCart()"
    >
      <img
        class="shopping-cart__close-image"
        :src="closeButton"
        alt="Shopping cart close"
      />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
