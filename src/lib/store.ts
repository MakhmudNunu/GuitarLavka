import { configureStore } from "@reduxjs/toolkit";

import productsReducer from './features/productsSlice'
import cartReducer from './features/cartSlice'
import favoritesReducer from './features/favoriteSlice'
import filtersReducer from './features/filtersSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            products: productsReducer,
            cart: cartReducer,
            favorites: favoritesReducer,
            filtres: filtersReducer
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']