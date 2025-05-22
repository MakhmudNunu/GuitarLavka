import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface IFormsState {
    invites: IInviteForm[]
    optApplication: IApplicationForm[]
    feedbacks: IFeedbackForm[]
}

const initialState: IFormsState = {
    invites: [],
    optApplication: [],
    feedbacks: []
};

export const addInvite = createAsyncThunk(
    'forms/addInvite',
    async (invite: IInviteForm) => {
        const response = await axios.post(`${API_URL}invites`, invite)
        return response.data
    }
)

export const fetchFeedbacks = createAsyncThunk<IFeedbackForm[]>(
    'forms/fetchFeedbacks',
    async () => {
        const response = await axios.get(`${API_URL}feedbacks`)
        return response.data
    }
)

export const addFeedback = createAsyncThunk(
    'forms/addFeedback',
    async (feedback: IFeedbackForm) => {
        const response = await axios.post(`${API_URL}feedbacks`, feedback)
        return response.data
    }
)

export const addApplication = createAsyncThunk(
    'forms/addApplication',
    async (application: IApplicationForm) => {
        const response = await axios.post(`${API_URL}opt-applications`, application)
        return response.data
    }
)

const formsSlice = createSlice({
    name: "forms",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            //Добавить приглашение
            .addCase(addInvite.fulfilled, (state, action) => {
                state.invites.push(action.payload)
            })


            .addCase(fetchFeedbacks.fulfilled, (state, action) => {
                state.feedbacks = action.payload
            })


            // Добавить отзыв
            .addCase(addFeedback.fulfilled, (state, action) => {
                state.feedbacks.push(action.payload)
            })
            // Добавить заявку
            .addCase(addApplication.fulfilled, (state, action) => {
                state.optApplication.push(action.payload)
            })
    }
});

export default formsSlice.reducer;
