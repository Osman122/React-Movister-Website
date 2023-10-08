import { useParams,useNavigate } from "react-router-dom"
import { useEffect, useState,useContext} from "react"
import LanguageContext from '../Context/LanguageContext';
import PageContext from '../Context/LanguageContext';
import { axiosInstance } from "../api/config";
import Paginator from '../Components/Paginator'
import MovieCard from "../Components/MovieCard";
import {Button,Alert} from 'react-bootstrap'

export default function SearchPage () {
    let {keyword:key} = useParams()
    const [ keyword, setkeyword ] = useState(key)
    const [ moviesList, setmoviesList ] = useState([])
    const [ page, setPage ] = useState(1)
    const [ maxpages, setmaxpages ] = useState(1)
    const {lang} = useContext(LanguageContext)

    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/3/search/movie?query=${keyword}&page=${page}&language=${lang}&include_adult=false`)
        .then((res) => {
            setmoviesList(res.data.results)
            setmaxpages(res.data.total_pages)
        })
        .catch((err) => console.log(err));
    },[lang,page,keyword]);

    return <>    
    <div className="bg-light rounded p-5 mb-5 lh-lg">
        <h1>Showing results for: <span className="text-muted">{keyword}</span></h1>
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
            <Paginator maxpages={maxpages}/>
        </PageContext.Provider>
        </>):<div>
            <Alert variant="info">
                No results found for {keyword}!
            </Alert>
            </div>
        :<></>}

</>
}