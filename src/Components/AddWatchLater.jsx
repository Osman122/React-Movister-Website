import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { axiosInstance } from '../api/config';
import {useSelector, useDispatch} from 'react-redux'
import {addTowatchlist,removeFromwatchlist} from '../store/Slices/watchlistSlice'
import { useEffect, useState } from 'react';

export default function AddWatchLater (props) {
    const {movie}=props
    const {watchlist, synced} = useSelector(state => state.watchlist)
    const dispatch = useDispatch()
    const [selected, setSelected]=useState(false)

    useEffect(()=>{
        setSelected(watchlist.includes(movie.id))
    },[synced])
    
    const addWatchlist = () => {
        
        if (watchlist.includes(movie.id)){

            axiosInstance.post(`/3/account/${window.sessionStorage.profile_id}/watchlist?session_id=${window.sessionStorage.session_id}`,
                {"media_type": "movie", "media_id":movie.id,"watchlist": false}
            ).then(res => {
                dispatch(removeFromwatchlist(movie.id))
            }).catch(err=> {console.log(err)})


        } else {
            axiosInstance.post(`/3/account/${window.sessionStorage.profile_id}/watchlist?session_id=${window.sessionStorage.session_id}`,
                {"media_type": "movie", "media_id":movie.id,"watchlist": true}
            ).then(res=>{
                dispatch(addTowatchlist(movie.id))
            }).catch(err=> {console.log(err)})
        }
        setSelected(!selected)
    }


    return <FontAwesomeIcon onClick={addWatchlist} className={`position-absolute fs-3 ${selected?"text-warning":"text-black-50"}`} style={{ right: '10px', top: '15px'}} icon={faHeart} />
}