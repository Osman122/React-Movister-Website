import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import MoviePage from "../Pages/MoviePage";
import Home from "../Pages/Home";
import SearchPage from "../Pages/SearchPage";
import WatchList from "../Pages/WatchList";
import NotFound from "../Pages/NotFound";

export default function Router() {
  return (
    <Suspense fallback={<div>Loading Page...</div>}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
