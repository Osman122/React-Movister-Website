import {configureStore} from '@reduxjs/toolkit'
import watchlistSlice from './Slices/watchlistSlice'

export default configureStore({
    reducer:{
        watchlist: watchlistSlice
    }
})