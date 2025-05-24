// store/searchSlice.ts
import { IProducts } from '@/entities/type/products';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL + 'products';

interface SearchState {
    query: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    results: IProducts[];
}

const initialState: SearchState = {
    query: '',
    status: 'idle',
    results: [],
};

export const fetchResult = createAsyncThunk<IProducts[], string>(
    'search/fetchResult',
    async (query) => {
        const response = await axios.get<IProducts[]>(API_URL);

        const filtered = response.data.filter((item) => {
            const q = query.toLowerCase();
            return (
                item.title.toLowerCase().includes(q) ||
                item.type?.toLowerCase().includes(q)
            );
        });

        return filtered;
    }
);


export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        clearSearch(state) {
            state.query = '';
            state.results = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchResult.pending, (state) => {
            state.status = 'loading'
        }) 
        .addCase(fetchResult.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.results = action.payload;
        })
        .addCase(fetchResult.rejected, (state) => {
            state.status = 'failed'
        })
    }
});

export const { setQuery, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
