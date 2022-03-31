import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductItemProps} from '../../types/productTypes';

export interface CartSliceProps {
    items: ProductItemProps[];
    currentItem: number | null;
}

const initialState: CartSliceProps = {
    items: [],
    currentItem: null,
};

const cartSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addPurchase: (state, {payload}: PayloadAction<ProductItemProps>) => {
            return {
                ...state,
                items: [...state.items, payload],
            };
        },
        removePurchase: (state, {payload}: PayloadAction<{id: number}>) => {
            const {id} = payload;
            return {
                ...state,
                items: state.items.filter((item) => item.id !== id),
            };
        },
    },
});

export const {addPurchase, removePurchase} = cartSlice.actions;

export default cartSlice.reducer;
