import { axiosInstance } from "../api/config"
import { useEffect, useState,useContext} from "react"
import LanguageContext from '../Context/LanguageContext';
import PageContext from '../Context/LanguageContext';
import MovieCard from "../Components/MovieCard";
import {Button} from 'react-bootstrap'
import Paginator from '../Components/Paginator'
import { useNavigate } from 'react-router-dom';

export default function Home () {
    const [ moviesList, setmoviesList ] = useState([])
    const [ page, setPage ] = useState(1)
    const [ maxpages, setmaxpages ] = useState(1)
    const {lang} = useContext(LanguageContext)
    const navigate = useNavigate()

    useEffect(()=>{
        axiosInstance.get(`/3/movie/popular?page=${page}&language=${lang}&include_adult=false`)
        .then((res)=>{
            setmoviesList(res.data.results)
            setmaxpages(res.data.total_pages)
        }).catch((error) => {
            console.log(error)
    })},[lang,page])

    return <>{moviesList?(<>
    <div className="bg-light rounded p-5 mb-5 lh-lg">
        <h1>Welcome to our movie app</h1>
        <p>Millions of movies and tv-shows to explore.</p>
        <div className="d-flex">
            <input type="search" className="form-control rounded vw-75 me-5" placeholder="Search and explore" aria-label="Search" aria-describedby="search-addon" />
            <Button className="bg-warning" style={{width: '150px'}} variant="warning" onClick={(event) => {
                navigate(`/search/${event.target.previousElementSibling.value}`)
            }}>Search</Button>{' '}
        </div>
        
    </div>
    <div className="row g-3">
       {moviesList.map((movie) => {
            return <MovieCard movie={movie} key={movie.id}/>
       })}
    </div></>):<></>}
    <PageContext.Provider  value={{page,setPage}}>
        <Paginator maxpages={maxpages}/>
    </PageContext.Provider>
</>}