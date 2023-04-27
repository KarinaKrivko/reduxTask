import { createSlice } from "@reduxjs/toolkit";


export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: []
    },
    reducers: {
        addBasket(state, {payload}){
            const product = state.basket.find(({id}) => id === payload)
            if (product) {
                product.count++
            } else {
                state.basket.push({id: payload, count: 1})
            }
            
        },

        removeFromBasket(state, action){
            state.basket = state.basket.filter(item => item.id !== action.payload)
        },

        increment(state, {payload}){
            state.basket.find(({id}) => id === payload).count++

        },

        decrement(state, {payload}){
            const target = state.basket.find(({id}) => id === payload)
            target.count === 0 ? target.count = 0 : target.count--
        }
    }
})

export const { addBasket, removeFromBasket, increment, decrement } = basketSlice.actions
export default basketSlice.reducer