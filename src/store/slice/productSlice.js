import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
            {id: 1, title: "Ukulele", price: 100},
            {id: 2, title: "Violin", price: 300},
            {id: 3, title: "Quitar", price: 600}
        ]
    },
    reducers: {
        add(state, action){
            state.products = [...state.products, action.payload]
        }
    }
})

export const { add } = productSlice.actions
export default productSlice.reducer