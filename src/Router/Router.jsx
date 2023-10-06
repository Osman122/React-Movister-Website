import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import MoviePage from "../Pages/MoviePage";
import Home from "../Pages/Home";
import SearchPage from "../Pages/SearchPage";
import WatchList from "../Pages/WatchList";
import NotFound from "../Pages/NotFound";
import Approved from "../Pages/Approved";

export default function Router() {
  return (
    <Suspense fallback={<div>Loading Page...</div>}>
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
