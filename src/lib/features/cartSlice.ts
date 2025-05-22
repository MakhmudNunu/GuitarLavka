import { ICartProduct } from "@/entities/type/products";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL + 'cart';

const initialState = {
    cart: [] as ICartProduct[],
    status: 'idle',
    finallyPrice: 0,
    finallyCount: 0,
    countForCartIcon: 0
};

// Функция для пересчёта общей суммы и количества
function recalculateTotals(state: typeof initialState) {
    state.finallyPrice = state.cart.reduce((acc, item) => {
        const discount = item.discount ?? 0;
        const discountedPrice = item.price * (1 - discount / 100);
        return acc + discountedPrice * item.quantity;
    }, 0);
    state.finallyCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
    state.countForCartIcon = state.cart.length
}

// Получение корзины
export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async () => {
        const response = await axios.get(API_URL);
        return response.data;
    }
);

// Добавление товара в корзину
export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (product: ICartProduct, { getState }) => {
        const state = getState() as any;
        const cart = state.cart.cart as Array<ICartProduct>;

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
            const response = await axios.put(`${API_URL}/${existingItem.id}`, updatedItem);
            return response.data;
        } else {
            const newItem = { productId: product.id, ...product, quantity: 1 };
            const response = await axios.post(API_URL, newItem);
            return response.data;
        }
    }
);

// Удаление товара из корзины
export const deleteFromCart = createAsyncThunk(
    'cart/deleteFromCart',
    async (id: number) => {
        await axios.delete(`${API_URL}/${id}`);
        return id;
    }
);

// Изменение количества товара
export const countUpdate = createAsyncThunk(
    'cart/countUpdate',
    async ({ id, quantity }: { id: number, quantity: number }) => {
        const response = await axios.patch(`${API_URL}/${id}`, { quantity });
        return response.data;
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Получение корзины
            .addCase(fetchCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = 'success';
                state.cart = action.payload;
                recalculateTotals(state);
            })
            .addCase(fetchCart.rejected, (state) => {
                state.status = 'error';
            })

            // Добавление в корзину
            .addCase(addToCart.fulfilled, (state, action) => {
                const index = state.cart.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.cart[index] = action.payload;
                } else {
                    state.cart.push(action.payload);
                }
                recalculateTotals(state);
            })

            // Удаление из корзины
            .addCase(deleteFromCart.fulfilled, (state, action) => {
                state.cart = state.cart.filter(item => item.id !== action.payload);
                recalculateTotals(state);
            })

            // Изменение количества
            .addCase(countUpdate.fulfilled, (state, action) => {
                const index = state.cart.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.cart[index].quantity = action.payload.quantity;
                }
                recalculateTotals(state);
            });
    }
});

export default cartSlice.reducer;
