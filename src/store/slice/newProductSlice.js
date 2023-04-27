import { createSlice } from "@reduxjs/toolkit"

export const newProductSlice = createSlice({
    name: 'product',
    initialState: {
        product: []
    },
})