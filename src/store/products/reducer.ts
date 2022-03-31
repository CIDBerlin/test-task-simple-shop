import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductItemProps} from '../../types/productTypes';

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await fetch('https://appevent.ru/dev/task1/catalog');
        const productData = await response.json();

        return productData.items;
    },
);

export interface ProductSliceProps {
    products: ProductItemProps[];
    currentProduct: number | null;
}

const initialState: ProductSliceProps = {
    products: [],
    currentProduct: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // Установка текущего продукта.
        setCurrentProduct: (state, {payload}: PayloadAction<{id: number}>) => {
            const {id} = payload;
            return {
                ...state,
                currentProduct: id,
            };
        },
    },
    extraReducers: (builder) => {
        // Отлавливаем успешное выполнение при состоянии fulfilled.
        builder.addCase(fetchProducts.fulfilled, (state, {payload}) => {
            state.products = payload;
        });
    },
});

export const {setCurrentProduct} = productSlice.actions;

export default productSlice.reducer;
