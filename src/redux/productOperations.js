import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/products';

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_, thunkApi) => {
        try {
            const response = await axios.get('/')
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const getProductById = createAsyncThunk(
    'products/getProductById',
    async (productId, thunkApi) => {
        try {
            const response = await axios.get(`/${productId}`)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)


