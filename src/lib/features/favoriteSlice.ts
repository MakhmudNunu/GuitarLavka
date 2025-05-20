import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProducts } from "@/entities/type/products"
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL + 'favorites'



interface FavoritesState {
    favorites: IProducts[]
    status: string
}

const initialState: FavoritesState = {
    favorites: [],
    status: 'idle'
};

export const fetchFavorites = createAsyncThunk(
    'favorites/fetchFavorites',
    async () => {
        const response = await axios.get(API_URL)
        return response.data
    }
)

const FavoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavorites.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchFavorites.fulfilled, (state, action) => {
                state.status = 'success'
                state.favorites = action.payload
            })
            .addCase(fetchFavorites.rejected, (state) => {
                state.status = 'error'
            })
    }
});

export default FavoritesSlice.reducer;
