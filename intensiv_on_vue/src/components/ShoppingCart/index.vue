<script>
import CartHeader from "./Header/index.vue";
import CartBody from "./Body/index.vue";
import CartFooter from "./Footer/index.vue";

export default {
  components: {
    CartHeader,
    CartBody,
    CartFooter,
  },
};
</script>

<template>
  <div class="shopping-cart__overlay shopping-cart__overlay-hidden">
    <div class="shopping-cart">
      <CartHeader />

      <CartBody />

      <CartFooter />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
