import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "./custom-button.component";
import CartItem from "./cart-item.component";
import { selectCartItems } from "../redux/cart/cart.selector";
import "../styles/cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
