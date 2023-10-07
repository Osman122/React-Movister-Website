import './MovieCard.css';
import Rating from '../Components/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {useSelector, useDispatch} from 'react-redux'
import {addTowatchlist,removeFromwatchlist} from '../store/Slices/watchlistSlice'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../api/config';
import { useState } from 'react';

export default function MovieCard (props) {
    const {movie} = props
    const watchlist = useSelector(state => state.watchlist.watchlist)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addWatchlist = async (movie) => {
        console.log(movie)
        // use reducer of watchlist to update count in header
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


    return <>{watchlist? <div className="col-6 col-md-4 col-lg-2">
            <div className="card mb-2 border-0 vh-50">
                <img  onClick={()=>navigate(`/movie/${movie.id}`)} 
                src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} 
                className="card-img-top img-fluid rounded" alt="product thumbnail" />
                <div className="card-body p-0 position-relative rounded mt-1">
                    <h5 onClick={()=>navigate(`/movie/${movie.id}`)} className="d-inline-block card-title mt-3 w-75" style={{textWrap: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>{movie.title}</h5>
                    <p className='position-absolute m-0 text-secondary p-0' style={{bottom: '-5px'}}>{movie.release_date}</p>
                    <div className='position-absolute' style={{top: '-30px',left: '15px'}}>
                        <Rating rate={parseInt(movie.vote_average)}/>
                    </div>
                    <FontAwesomeIcon onClick={() => addWatchlist(movie)} className={`position-absolute fs-3 ${watchlist.includes(movie.id)?"text-warning":"text-black-50"}`} style={{ right: '10px', top: '15px'}} icon={faHeart} />
                </div>
                </div>
            </div>
        :<></>}</>  
}