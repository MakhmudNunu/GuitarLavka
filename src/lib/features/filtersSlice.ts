import { createSlice } from "@reduxjs/toolkit";

interface FiltresState {
    inStock: boolean | null
}

const initialState: FiltresState = {
    inStock: null
};

const filtresSlice = createSlice({
    name: "filtres",
    initialState,
    reducers: {
        setInStock(state, action) {
            state.inStock = action.payload;
        },
    }
});

export const { setInStock} = filtresSlice.actions;

export default filtresSlice.reducer;
