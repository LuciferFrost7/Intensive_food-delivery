<script setup>
import DeliveryHeader from "./components/layout/DeliveryHeader/index.vue";
import DeliveryFooter from "./components/layout/DeliveryFooter/index.vue";
</script>

<template>
  <div class="page-wrapper">
    <DeliveryHeader />
    <router-view></router-view>
    <DeliveryFooter />
  </div>
</template>

<style scoped></style>
