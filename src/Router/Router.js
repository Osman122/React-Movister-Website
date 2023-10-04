import {Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import Home from '../pages/Home/Home'
import SearchPage from '../pages/SearchPage/SearchPage'
import WishlistPage from '../pages/WishlistPage/WishlistPage'
import MoviePage from '../pages/MoviePage/MoviePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

export default function Router () {
    return <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
            <Route path={["/","/home"]} element={<Home/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/wishlist" element={<WishlistPage/>}/>
            <Route path="/movie" element={<MoviePage/>}/>
            <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
    </Suspense>
}