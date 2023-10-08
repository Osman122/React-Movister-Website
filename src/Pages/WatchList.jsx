import { axiosInstance } from "../api/config"
import { useState, useContext, useEffect} from "react"
import LanguageContext from '../Context/LanguageContext';
import WatchListCard from "../Components/WatchListCard";

export default function WatchList() {
    const [ moviesList, setmoviesList ] = useState([])
    const [ page, setPage ] = useState(1)
    const {lang} = useContext(LanguageContext)

    async function getWatchlist () {
        const res = await axiosInstance.get(`/3/account/${window.sessionStorage.profile_id}/watchlist/movies?language=${lang}&page=${page}`)
        setmoviesList(res.data.results)
    }

    useEffect(()=>{
        getWatchlist()
    },[lang])

    return (<div className="row justify-content-around">
       {moviesList.map((movie) => {
            return <WatchListCard movie={movie} />
       })}
</div>)
}