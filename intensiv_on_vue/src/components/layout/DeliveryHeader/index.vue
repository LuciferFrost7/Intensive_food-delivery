<script>
import DeliveryLogo from "../DeliveryLogo/index.vue";
import LoginButton from "./LoginButton/LoginButton.vue";
import CartButton from "./CartButton/index.vue";

export default {
  components: {
    DeliveryLogo,
    LoginButton,
    CartButton,
  },
};
</script>

<template>
  <header class="delivery-header">
    <div class="wrapper">
      <div class="delivery-header__inner">
        <DeliveryLogo />
        <div class="delivery-header__controls">
          <LoginButton />
          <CartButton />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
