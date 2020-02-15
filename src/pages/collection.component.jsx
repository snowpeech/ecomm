import React from "react";
import { connect } from "react-redux";

import MerchItem from "../components/merch-item.component";
import { selectACollection } from "../redux/shop/shop.selectors";

import "../styles/collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log("here", collection);
  console.log("title", title);
  console.log(items);
  items.map(item => console.log("id", item.id, "title", item.name));
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <MerchItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectACollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
