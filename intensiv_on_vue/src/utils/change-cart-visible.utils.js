function changeVisibleShoppingCart() {
  const shoppingCart = document.querySelector(".shopping-cart__overlay");
  const shoppingCartHidden = "shopping-cart__overlay-hidden";
  const shoppingCartVisible = "shopping-cart__overlay-visible";

  if (shoppingCart.classList.contains(shoppingCartVisible)) {
    shoppingCart.classList.remove(shoppingCartVisible);
    shoppingCart.classList.add(shoppingCartHidden);
  } else {
    shoppingCart.classList.remove(shoppingCartHidden);
    shoppingCart.classList.add(shoppingCartVisible);
  }
}

export default changeVisibleShoppingCart;
