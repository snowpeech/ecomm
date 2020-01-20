import React from "react";

import MerchItem from "./merch-item.component";

import "./preview.styles.scss";

const Preview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1> {title.toUpperCase()} </h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <MerchItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default Preview;
