import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CustomButton from "./custom-button.component";
import CartItem from "./cart-item.component";
import { selectCartItems } from "../redux/cart/cart.selector";
import { toggleCartHidden } from "../redux/cart/cart.actions";

import "../styles/cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state =>
  createStructuredSelector({
    cartItems: selectCartItems
  });

export default withRouter(connect(mapStateToProps)(CartDropdown));
//when you wrap components like this, it evaluates inside out. this way our component will have access to the desired props
