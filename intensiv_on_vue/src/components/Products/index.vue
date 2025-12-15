<script>
import ProductsHeader from "./ProductsHeader/index.vue";
import ProductsList from "./ProductsList/index.vue";

export default {
  components: {
    ProductsHeader,
    ProductsList,
  },
};
</script>

<template>
  <section class="products">
    <ProductsHeader />
    <ProductsList />
  </section>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
