import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { axiosInstance } from '../api/config';
import {useSelector, useDispatch} from 'react-redux'
import {addTowatchlist,removeFromwatchlist} from '../store/Slices/watchlistSlice'

export default function AddWatchLater (props) {
    const {movie}=props
    const watchlist = useSelector(state => state.watchlist.watchlist)
    const dispatch = useDispatch()
    

    const addWatchlist = async () => {
        if (watchlist.includes(movie.id)){
            const res = await axiosInstance.post(`/3/account/${window.sessionStorage.profile_id}/watchlist?session_id=${window.sessionStorage.session_id}`,
                {"media_type": "movie", "media_id":movie.id,"watchlist": false}
            )
            if (res.data.status_code === 13) dispatch(removeFromwatchlist(movie.id))

        } else {
            const res = await axiosInstance.post(`/3/account/${window.sessionStorage.profile_id}/watchlist?session_id=${window.sessionStorage.session_id}`,
                {"media_type": "movie", "media_id":movie.id,"watchlist": true}
            )
            if (res.data.status_code === 1) dispatch(addTowatchlist(movie.id))
        }
    }

    return <FontAwesomeIcon onClick={() => addWatchlist(movie)} className={`position-absolute fs-3 ${watchlist.includes(movie.id)?"text-warning":"text-black-50"}`} style={{ right: '10px', top: '15px'}} icon={faHeart} />
}