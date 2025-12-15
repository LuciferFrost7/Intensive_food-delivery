<script>
import Products from "@/components/Products/index.vue";
import ShoppingCart from "@/components/ShoppingCart/index.vue";
import changeVisibleShoppingCart from "@/utils/change-cart-visible.utils.js";

if (window.location.pathname == "/restaurants") {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const shoppingCart = document.querySelector(".shopping-cart__overlay");
      const shoppingCartVisible = "shopping-cart__overlay-visible";

      if (shoppingCart.classList.contains(shoppingCartVisible)) {
        changeVisibleShoppingCart();
      }
    }
  });
}

export default {
  components: {
    Products,
    ShoppingCart,
  },
  data() {
    return {
      changeVisibleShoppingCart,
    };
  },
};
</script>

<template>
  <main class="delivery-main">
    <div class="wrapper">
      <Products />
    </div>
  </main>

  <ShoppingCart />
</template>

<style scoped lang="scss">
.delivery-main {
  flex-grow: 1;
  background: linear-gradient(
    180deg,
    var(--bg-color-main3) 1.04%,
    var(--bg-color-main1) 100%
  );
}
</style>
