import React from "react";

import CustomButton from "./custom-button.component";

import "../styles/cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

export default CartDropdown;