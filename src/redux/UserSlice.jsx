import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getUserSlice = createAsyncThunk(
    "UserSlice/getUserSlice",
    async () =>{
        const res = await axios.get("https://dummyjson.com/users")
        return res;
    }
);
