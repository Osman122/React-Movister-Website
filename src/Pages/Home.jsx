import { axiosInstance } from "../api/config"
import { useEffect, useState,useContext} from "react"
import LanguageContext from '../Context/LanguageContext';
import PageContext from '../Context/LanguageContext';
import MovieCard from "../Components/MovieCard";
import {Button} from 'react-bootstrap'
import Paginator from '../Components/Paginator'
import {movies} from '../api/movies'

export default function Home () {
    const [ moviesList, setmoviesList ] = useState([])
    const [ page, setPage ] = useState(1)
    const {lang} = useContext(LanguageContext)

    //const testmovies = movies.results

    useEffect(()=>{
        axiosInstance.get(`/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=${lang}`)
        .then((res)=>{
            setmoviesList(res.data.results)
        }).catch((error) => {
            console.log(error)
    })},[lang,page])

    return <>{moviesList?(<>
    <div className="bg-light rounded p-5 mb-5 lh-lg">
        <h1>Welcome to our movie app</h1>
        <p>Millions of movies and tv-shows to explore.</p>
        <div className="d-flex">
            <input type="search" className="form-control rounded vw-75 me-5" placeholder="Search and explore" aria-label="Search" aria-describedby="search-addon" />
            <Button className="bg-warning" style={{width: '150px'}} variant="warning">Search</Button>{' '}
        </div>
        
    </div>
    <div className="row g-3">
       {moviesList.map((movie) => {
            return <MovieCard movie={movie} />
       })}
    </div></>):<></>}
    <PageContext.Provider  value={{page,setPage}}>
        <Paginator />
    </PageContext.Provider>
</>}