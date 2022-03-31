import {RootState} from '../store';
import {createSelector} from 'reselect';

export const productSlice = (state: RootState) => {
    return state.products;
};

export const selectCurrentProduct = createSelector(
    [productSlice],
    ({products, currentProduct}) => {
        return products.find((item) => item.id === currentProduct);
    },
);
