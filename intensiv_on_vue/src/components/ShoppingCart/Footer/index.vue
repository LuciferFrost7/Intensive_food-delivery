<script>
import changeVisibleShoppingCart from "@/utils/change-cart-visible.utils.js";

function takeOrder() {
  const shoppingCartTotal = document.querySelector("#shopping-cart-total");
  const totalAmount = shoppingCartTotal.textContent;

  if (!totalAmount.startsWith("0")) {
    alert(`Оформлен заказ на сумму: ${totalAmount}`);
  } else {
    alert("Нельзя оформить заказ, потому что корзина пуста!");
  }
}

export default {
  data() {
    return {
      changeVisibleShoppingCart,
      takeOrder,
    };
  },
};
</script>

<template>
  <div class="shopping-cart__footer">
    <div id="shopping-cart-total" class="shopping-cart__total">0 ₽</div>
    <div class="shopping-cart__controls">
      <button
        id="shopping-cart-order-button"
        class="shopping-cart__order-button"
        @click="takeOrder()"
      >
        Оформить заказ
      </button>
      <button
        id="shopping-cart-cancel-button"
        class="shopping-cart__cancel-button"
        @click="changeVisibleShoppingCart()"
      >
        Отмена
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
