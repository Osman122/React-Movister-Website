import { useParams,useNavigate } from "react-router-dom"
import { useEffect, useState,useContext} from "react"
import LanguageContext from '../Context/LanguageContext';
import PageContext from '../Context/LanguageContext';
import { axiosInstance } from "../api/config";
import Paginator from '../Components/Paginator'
import MovieCard from "../Components/MovieCard";
import {Button,Alert} from 'react-bootstrap'

export default function SearchPage () {
    let {key} = useParams()
    const [ keyword, setkeyword ] = useState(key)
    const [ moviesList, setmoviesList ] = useState([])
    const [ page, setPage ] = useState(1)
    const {lang} = useContext(LanguageContext)

    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/3/search/movie?query=${keyword}&api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=${lang}`)
        .then((res) => {
            setmoviesList(res.data.results)
        })
        .catch((err) => console.log(err));
    },[lang,page,keyword]);

    return <>    
    <div className="bg-light rounded p-5 mb-5 lh-lg">
        <h1>Showing results for: {keyword}</h1>
        <div className="d-flex">
            <input type="search" value={keyword} 
            onChange={e=>{
                setkeyword(e.target.value);
                setPage(1);
                }} className="form-control rounded vw-75 me-5" placeholder="Search and explore" aria-label="Search" aria-describedby="search-addon" />
            <Button className="bg-warning" style={{width: '150px'}} variant="warning" onClick={(event) => {
                setPage(1);navigate(`/search/${event.target.previousElementSibling.value}`)
            }}>Search</Button>{' '}
        </div>
    </div>
    {moviesList?moviesList.length?(<>
        <div className="row g-3">
        {moviesList.map((movie) => {
                return <MovieCard movie={movie} />
        })}
        </div>
        <PageContext.Provider  value={{page,setPage}}>
            <Paginator />
        </PageContext.Provider>
        </>):<div>
            <Alert variant="secondary">
                No results found for {keyword}!
            </Alert>
            </div>
        :<></>}

</>
}