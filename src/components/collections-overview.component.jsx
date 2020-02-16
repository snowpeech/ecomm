import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Preview from "./preview.component";

import { selectCollectionsForPreview } from "../redux/shop/shop.selectors";

import "../styles/collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <Preview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
