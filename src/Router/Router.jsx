import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "../Components/Loader";

//import MoviePage from "../Pages/MoviePage";
//import Home from "../Pages/Home";
//import SearchPage from "../Pages/SearchPage";
//import WatchList from "../Pages/WatchList";
//import NotFound from "../Pages/NotFound";
//import Approved from "../Pages/Approved";
const MoviePage = React.lazy(() => import('../Pages/MoviePage'));
const Home = React.lazy(() => import('../Pages/Home'));
const SearchPage = React.lazy(() => import('../Pages/SearchPage'));
const NotFound = React.lazy(() => import('../Pages/NotFound'));
const WatchList = React.lazy(() => import('../Pages/WatchList'));
const Approved = React.lazy(() => import('../Pages/Approved'));

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/approved" element={<Approved />} />
        <Route path="/movister" element={<Home />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
