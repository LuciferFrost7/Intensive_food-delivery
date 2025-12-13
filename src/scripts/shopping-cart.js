const shoppingCartHidden = "shopping-cart__overlay-hidden";
const shoppingCartVisible = "shopping-cart__overlay-visible";

const shoppingCart = document.querySelector(".shopping-cart__overlay");
const shoppingCartCloseButton = document.querySelector(
  "#shopping-cart-close-button"
);
const shoppingCartOpenButton = document.querySelector(
  "#shopping-cart-open-button"
);
const shoppingCartOrderButton = document.querySelector(
  "#shopping-cart-order-button"
);
const shoppingCartCancelButton = document.querySelector(
  "#shopping-cart-cancel-button"
);
const shoppingCartTotal = document.querySelector("#shopping-cart-total");

function changeVisibleShoppingCart() {
  if (shoppingCart.classList.contains(shoppingCartVisible)) {
    shoppingCart.classList.remove(shoppingCartVisible);
    shoppingCart.classList.add(shoppingCartHidden);
  } else {
    shoppingCart.classList.remove(shoppingCartHidden);
    shoppingCart.classList.add(shoppingCartVisible);
  }
}

function takeOrder() {
  const totalAmount = shoppingCartTotal.textContent;

  if (!totalAmount.startsWith("0")) {
    alert(`Оформлен заказ на сумму: ${totalAmount}`);
  } else {
    alert("Нельзя оформить заказ, потому что корзина пуста!");
  }
}

shoppingCartCloseButton.addEventListener("click", changeVisibleShoppingCart);
shoppingCartOpenButton.addEventListener("click", changeVisibleShoppingCart);
shoppingCartCancelButton.addEventListener("click", changeVisibleShoppingCart);

shoppingCartOrderButton.addEventListener("click", takeOrder);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (shoppingCart.classList.contains(shoppingCartVisible)) {
      changeVisibleShoppingCart();
    }
  }
});
