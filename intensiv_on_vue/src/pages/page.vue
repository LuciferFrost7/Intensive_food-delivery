<script>
import Banner from "@/components/Banner/index.vue";
import Restaurants from "@/components/Restaurants/index.vue";

export default {
  components: {
    Banner,
    Restaurants,
  },
};
</script>

<template>
  <main class="delivery-main">
    <div class="wrapper">
      <Banner />
      <Restaurants />
    </div>
  </main>
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
