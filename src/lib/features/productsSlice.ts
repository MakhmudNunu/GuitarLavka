import { IProducts } from "@/entities/type/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/";

interface ProductsState {
    products: IProducts[];
    popularProducts: IProducts[];
    product: IProducts | null;
    viewType: 'Net' | 'List';
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    popularProducts: [],
    product: null,
    viewType: 'Net',
    status: 'idle',
    error: null,
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { getState }) => {
        const state = getState() as RootState;
        const inStock = state.filtres.inStock;

        const response = await axios.get(`${API_URL}products`);
        const data = response.data;

        const filtered = inStock === null
            ? data
            : data.filter((p: IProducts) =>
                inStock ? p.stock > 0 : p.stock === 0
            );
        return filtered;
    }
);

export const fetchOneProduct = createAsyncThunk(
    'oneProduct/fetchOneProduct',
    async (id: string) => {
        const response = await axios.get(`${API_URL}products/${id}`);
        return response.data;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        toggleViewType: (state) => {
            state.viewType = state.viewType === 'Net' ? 'List' : 'Net';
        },
        setPopularProducts: (state, action) => {
            state.popularProducts = action.payload.filter((item: IProducts) => item.rate >= 4);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Не удалось загрузить товары';
            })
            .addCase(fetchOneProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOneProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.product = action.payload;
            })
            .addCase(fetchOneProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Не удалось загрузить товар';
            });
    },
});

export const { toggleViewType, setPopularProducts } = productsSlice.actions;

export default productsSlice.reducer;
