import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    reviews: [],
};

// Action to add a review
export const addReview = createAsyncThunk(
    "shop/addReview",
    async (data) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/shop/review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }
);

// Action to get reviews
export const getReview = createAsyncThunk(
    "shop/getReview",
    async (id) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/shop/review/${id}`);
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    }
);

const reviewSlice = createSlice({
    name: "reviewslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReview.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getReview.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reviews = action.payload.data;
            })
            .addCase(getReview.rejected, (state) => {
                state.isLoading = false;
                state.reviews = [];
            });
    },
});

export default reviewSlice.reducer;
