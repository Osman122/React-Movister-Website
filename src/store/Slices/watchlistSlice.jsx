import {createSlice} from '@reduxjs/toolkit'

const Initial_State = {
    watchlist: []
}

const watchlistSlice = createSlice({
    name: 'watchlistSlice',
    initialState: Initial_State,
    reducers:{
        addTowatchlist: (state, action) => {
            state.watchlist.push(action.payload)
        },

        removeFromwatchlist: (state,action) => {
            state.watchlist.pop(state.watchlist.indexOf(action.payload))
        },

        clearwatchlist: (state,action) => {
            state.watchlist = []
        }
    }
})

export const {addTowatchlist, removeFromwatchlist, clearwatchlist} = watchlistSlice.actions
export default watchlistSlice.reducer;