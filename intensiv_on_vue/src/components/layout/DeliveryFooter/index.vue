<script>
import DeliveryLogo from "../DeliveryLogo/index.vue";
import SOCIAL_ITEMS from "@/constants/social.items.js";
import NAVIGATION_ITEMS from "@/constants/navigation.items.js";

export default {
  components: { DeliveryLogo },
  data() {
    return {
      navigationItems: NAVIGATION_ITEMS,
      socialItems: SOCIAL_ITEMS,
    };
  },
};
</script>

<template>
  <footer class="delivery-footer">
    <div class="wrapper">
      <div class="delivery-footer__inner">
        <DeliveryLogo />
        <nav class="delivery-footer__navigation">
          <ul class="delivery-footer__navigation-list">
            <li
              v-for="item in navigationItems"
              :key="item.id"
              class="delivery-footer__navigation-item"
            >
              <a :href="item.url">{{ item.text }}</a>
            </li>
          </ul>
        </nav>
        <div class="delivery-footer__social">
          <a
            class="delivery-footer__social-link"
            v-for="item in socialItems"
            :title="item.title"
            :href="item.url"
            :key="item.id"
          >
            <img
              class="delivery-footer__social-icon"
              :src="item.image.src"
              :alt="item.image.alt"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
