import { axiosInstance } from "../api/config"
import { useEffect, useState,useContext} from "react"
import LanguageContext from '../Context/LanguageContext';
import MovieCard from "../Components/MovieCard";

import {movies} from '../api/movies'
import WatchListCard from "../Components/WatchListCard";
export default function WatchList() {
/*
    const [ moviesList, setmoviesList ] = useState([])
    const [ page, setPage ] = useState(1)
    const {lang} = useContext(LanguageContext)
*/
    const testmovies = movies.results

   

    return (<div className="row">
       {testmovies.map((movie) => {
            return <WatchListCard movie={movie} />
       })}
</div>)
}