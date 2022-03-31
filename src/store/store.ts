import {configureStore, Middleware} from '@reduxjs/toolkit';
import ProductReducer, {ProductSliceProps} from './products/reducer';
import cartReducer, {CartSliceProps} from './cart/reducer';

/**
 * Сохранение данных из store в localStorage.
 * @param store
 */
const savePersistedDataMiddleware: Middleware =
    (store) => (next) => (action) => {
        const result = next(action);
        localStorage.setItem('state', JSON.stringify(store.getState()));
        return result;
    };

/**
 * Получение стейта из localStorage.
 */
const getPersistedState = (): RootState | undefined => {
    try {
        const persistedState = localStorage.getItem('state');
        if (persistedState) return JSON.parse(persistedState);
    } catch (e) {
        console.log(e);
    }
    return undefined;
};

/**
 * Объявление store, а также подключение:
 * Редьюсеров и дополнительных middleware, preloadState.
 */
export const store = configureStore({
    reducer: {
        products: ProductReducer,
        cart: cartReducer,
    },
    preloadedState: getPersistedState(),
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        savePersistedDataMiddleware,
    ],
});

// Объявление типов для state.
export type RootState = {products: ProductSliceProps; cart: CartSliceProps};
