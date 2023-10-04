
import { Route, Routes } from "react-router-dom";

import Details from "../Pages/Details";
import MainPage from "../Pages/MainPage";
import Search from "../Pages/Search";
import WatchList from "../Pages/WatchList";
import NotFound from "../Pages/NotFound";


export default function Router() {
  return (
    
    <Routes>
    < Route path="/Details" element={<Details />} />
    < Route path="/MainPage" element={<MainPage />} />
    < Route path="/Search" element={<Search />} />
    < Route path="/WatchList" element={<WatchList />} />
    
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  );
}