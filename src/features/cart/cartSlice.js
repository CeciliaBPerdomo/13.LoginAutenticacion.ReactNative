import { createSlice } from '@reduxjs/toolkit'

// valor inicial del estado // state (store)
const initialState = {
    items: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,   // initialState: initialState

    // Funciones que voy a usar atraves de cartSlice.actions
    reducers: {
        addCartItem: (state, action) => {
            const existingItem = state.items.findIndex((item) => item.id === action.payload.id)
            if (existingItem === -1) {
                // Immer Library --> seria lo mismo que state.items = [...state.items, actions.payload]
                //state.items.push(action.payload)
                state.items = [...state.items, { ...action.payload, quantity: 1 }]
            } else {
                state.items = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                })
            }
            state.total = state.items.reduce((acc, item) => acc = acc + (item.price * item.quantity), 0)
        },
        deleteCartItem: (state, action) => {
            state.items = state.items.filter((item) => item.id != action.payload)
            state.total = state.items.reduce((acc, item) => acc = acc + item.price, 0) //Actualiza el precio si borra
        }
    }
})

export const { addCartItem, deleteCartItem } = cartSlice.actions
export default cartSlice.reducer