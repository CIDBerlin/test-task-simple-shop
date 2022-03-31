import {RootState} from '../store';
import {createSelector} from 'reselect';
import {productSlice, selectCurrentProduct} from '../products/selectors';

const cartSlice = (state: RootState) => {
    return state.cart;
};

export const selectCartItemsCost = createSelector([cartSlice], ({items}) => {
    return items.map((item) => item.price).reduce((a, b) => a + b, 0);
});

export const selectPurchaseItem = createSelector(
    [cartSlice, productSlice, selectCurrentProduct],
    (cardSlice, productsSlice, currentProduct) => {
        const {items} = cardSlice;
        const {products} = productsSlice;
        return items
            .filter((item) => {
                return products.some((product) => {
                    return item.id === product.id && item.id === product.id;
                });
            })
            .find((item) => {
                if (currentProduct) {
                    return item.id === currentProduct.id;
                }
                return null;
            });
    },
);
