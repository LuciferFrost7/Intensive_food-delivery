<script>
import RestaurantsHeader from "./RestaurantsHeader/index.vue";
import RestaurantsList from "./RestaurantsList/index.vue";

export default {
  components: {
    RestaurantsHeader,
    RestaurantsList,
  },
};
</script>

<template>
  <section class="restaurants">
    <RestaurantsHeader />
    <RestaurantsList />
  </section>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
