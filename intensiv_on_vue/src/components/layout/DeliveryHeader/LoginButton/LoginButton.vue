<script>
import loginImage from "@images/pins/account.svg";
export default {
  data() {
    return {
      loginImage,
    };
  },
};
</script>

<template>
  <button class="login-button">
    <img
      :src="loginImage"
      alt="Delivery Food Account"
      class="login-button__image"
    />
    <p class="login-button__text">Войти</p>
  </button>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
