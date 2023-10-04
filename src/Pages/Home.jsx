import { axiosInstance } from "../api/config"
import { useEffect, useState,useContext} from "react"
import LanguageContext from '../Context/LanguageContext';
import MovieCard from "../Components/MovieCard";

import {movies} from '../api/movies'

export default function Home () {
    const [ moviesList, setmoviesList ] = useState([])
    const [ page, setPage ] = useState(1)
    const {lang} = useContext(LanguageContext)

    const testmovies = movies.results

    console.log(testmovies)
    useEffect(()=>{
        axiosInstance.get(`/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=${lang}`).then((res)=>{
            setmoviesList(res.data.results)
        })},[])

    return (<div className="row">
       {testmovies.map((movie) => {
            return <MovieCard movie={movie} />
       })}
</div>)
}