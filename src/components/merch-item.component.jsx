import React from "react";
import { connect } from "react-redux";

import CustomButton from "./custom-button.component";
import { addItem } from "../redux/cart/cart.actions";

import "../styles/merch-item.styles.scss";

const MerchItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='merch-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(MerchItem);
