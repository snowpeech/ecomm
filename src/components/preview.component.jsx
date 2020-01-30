import React from "react";

import MerchItem from "./merch-item.component";

import "../styles/preview.styles.scss";

const Preview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1> {title.toUpperCase()} </h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <MerchItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default Preview;
