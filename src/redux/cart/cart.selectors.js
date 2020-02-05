import { createSelector } from "reselect";

const selectCart = state => state.cart; // selects a slice of the state, usually top level

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
); // cartItems is a property on our cart. first arg is a collection of input selectors (the cart). 2nd arg is a function that will return value out of selector. (i.e. cart item)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,
      0
    )
); //its more common to use selectors that are more specific vs the large slice of selectCart (ln 4)
