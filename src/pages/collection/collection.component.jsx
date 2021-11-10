import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import CollectionItem from '../../components/collection-item/collection-item.component';
import BackArrow from '../../components/back-arrow/back-arrow.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
  CollectionPageHeader
} from './collection.styles';

const CollectionPage = ({ collection }) => {
   const history = useHistory();
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
  <CollectionPageHeader>
   <BackArrow onClick={() =>  history.goBack()}>&#10094;&#10094; Back</BackArrow>
  <CollectionTitle>{title}</CollectionTitle>
  </CollectionPageHeader>
      
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
