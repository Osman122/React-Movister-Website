import {createSlice} from '@reduxjs/toolkit'

const Initial_State = {
    wishlist: []
}

const wishistSlice = createSlice({
    name: 'wishlistSlice',
    initialstate: Initial_State,
    reducers:{
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload)
        },

        removeFromWishlist: (state,action) => {
            state.wishlist.pop(state.wishlist.indexOf(action.payload))
        },

        clearWishlist: (state,action) => {
            state.wishlist = []
        }
    }
})

export const {addToWishlist, removeFromWishlist, clearWishlist} = wishistSlice.actions
export default wishistSlice;