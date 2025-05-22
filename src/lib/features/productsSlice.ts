import { IProducts } from "@/entities/type/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/";

interface ProductsState {
    products: IProducts[];
    originalProducts: IProducts[]
    popularProducts: IProducts[];
    product: IProducts | null;
    sortBy: 'default' | 'title' | 'price-asc' | 'price-desc'
    viewType: 'Net' | 'List';
    viewBy: string
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    isCategory: string
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    originalProducts: [],
    popularProducts: [],
    product: null,
    sortBy: 'default',
    viewType: 'Net',
    viewBy: '12',
    status: 'idle',
    isCategory: '',
    error: null,
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { getState }) => {
        const state = getState() as RootState;
        const inStock = state.filtres.inStock;
        const category = state.products.isCategory;

        const response = await axios.get(`${API_URL}products`);
        const data = response.data;

        let filtered = inStock === null
            ? data
            : data.filter((p: IProducts) => inStock ? p.stock > 0 : p.stock === 0);

        if (category) {
            filtered = filtered.filter((p: IProducts) => p.category === category);
        }

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
        },
        sortBy: (state, action) => {
            state.sortBy = action.payload;
            switch (action.payload) {
                case 'title':
                    state.products.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'price-asc':
                    state.products.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    state.products.sort((a, b) => b.price - a.price);
                    break;
                case 'default':
                default:
                    state.products = [...state.originalProducts];
                    break;
            }
        },
        setViewBy: (state, action) => {
            state.viewBy = action.payload;
        },
        setCategory: (state, action) => {
            state.isCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            //Получаем товары
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
                state.originalProducts = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Не удалось загрузить товары';

                //Получаем один товар
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

export const { toggleViewType, setPopularProducts, sortBy, setViewBy, setCategory } = productsSlice.actions;

export default productsSlice.reducer;
