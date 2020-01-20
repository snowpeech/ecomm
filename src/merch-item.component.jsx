import React from "react";

import "./merch-item.styles.scss";

const MerchItem = ({ id, name, price, imageUrl }) => (
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
  </div>
);

export default MerchItem;
