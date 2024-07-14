import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    quantity: 0,
}

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

const cartSlice= createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToCart(state, action){
            const find = state.cart.findIndex(item=>item.id===action.payload.id)
            if (find>=0){
                state.cart[find].quantity += 1
            }else {
                const tempvar = {...action.payload, quantity:1}
            state.cart.push(tempvar)
            }
        },

        removeFromCart(state, action){
            const find = state.cart.findIndex(item=>item.id===action.payload.id)
            if (find>=0){
                state.cart.splice(find, 1)
            }        
        },
    }}
)


export const {addToCart} = cartSlice.actions;
export const {removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
