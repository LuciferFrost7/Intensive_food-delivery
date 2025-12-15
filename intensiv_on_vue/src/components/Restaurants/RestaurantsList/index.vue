<script>
import restaurantsItems from "@/constants/restaurants.items.js";
import starImage from "@images/pins/star.svg";

export default {
  data() {
    return {
      restaurantsItems,
      starImage,
    };
  },
};
</script>

<template>
  <ul id="restaurants-list" class="restaurants__list">
    <li
      class="restaurants__card"
      v-for="item in restaurantsItems"
      :key="item.id"
    >
      <router-link
        class="restaurants__card-link"
        :to="{ path: '/restaurants', query: { restaurant: item.id } }"
      >
        <img
          class="restaurants__card-image"
          :src="item.image.src"
          :alt="item.image.alt"
        />
        <div class="restaurants__card-info">
          <div class="restaurants__card-header">
            <h3 class="restaurants__card-name">{{ item.name }}</h3>
            <p class="restaurants__card-time">{{ item.time }} мин</p>
          </div>
          <div class="restaurants__card-details">
            <div class="restaurants__card-rating">
              <img
                class="restaurants__card-star"
                :src="starImage"
                alt="Food Delivery stars"
              />
              <p class="restaurants__card-points">{{ item.rating }}</p>
            </div>
            <p class="restaurants__card-price">От {{ item.min_price }} ₽</p>
            <p class="restaurants__card-type">{{ item.type }}</p>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
