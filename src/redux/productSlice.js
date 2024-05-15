import {
    createSlice
} from "@reduxjs/toolkit";
import {
    getAllProducts,
    getProductById
} from "./productOperations";

const initialState = {
    products: [],
    bucket: [],
    error: null,
    isLoading: false,
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.products = action.payload;
            })
            .addCase(getProductById.pending, state => {
                state.isLoading = true;
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.bucket = [...state.bucket, action.payload];
            })
    }
})




export const productReducer = productSlice.reducer