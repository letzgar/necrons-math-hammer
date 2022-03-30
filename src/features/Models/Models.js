import {  createSlice } from '@reduxjs/toolkit';
import initialState from "./initialState";

export const modelsSlice = createSlice({
    name: 'models',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
    }
});

export default modelsSlice.reducer;