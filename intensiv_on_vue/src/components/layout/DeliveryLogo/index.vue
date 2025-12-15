<script>
import logoImage from "@images/logo.svg";

export default {
  data() {
    return {
      logoImage,
    };
  },
};
</script>

<template>
  <div class="delivery-logo">
    <router-link class="delivery-logo__link" :to="{ path: '/' }">
      <img
        :src="logoImage"
        alt="Delivery Food Logo"
        class="delivery-logo__image"
      />
      <p class="delivery-logo__title">Delivery Food</p>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
