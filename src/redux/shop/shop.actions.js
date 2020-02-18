import ShopActionTypes from './shop.types';
import collectionComponent from '../../pages/collection.component';

export const updateCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})