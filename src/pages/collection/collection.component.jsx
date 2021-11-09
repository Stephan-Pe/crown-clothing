import React from 'react';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";

import CollectionItem from '../../components/collection-item/collection-item.component';
import BackArrow from '../../components/back-arrow/back-arrow.component';

import {selectCollection} from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection}) => {
    const history = useHistory();
    const {title, items} = collection;
    return(
    <div className='collection-page'>
        <div className="collection-page__header">
             <BackArrow onClick={() =>  history.goBack()}>&#10094;&#10094; Back</BackArrow>
        <h2 className="title">{ title }</h2>
        </div>
       
        <div className="items">
            {items.map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>

    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);