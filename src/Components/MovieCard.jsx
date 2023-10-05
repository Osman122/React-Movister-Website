import './MovieCard.css';
import Rating from '../Components/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {useSelector, useDispatch} from 'react-redux'
import {addTowatchlist,removeFromwatchlist} from '../store/Slices/watchlistSlice'

export default function MovieCard (props) {
    const {movie} = props
    const watchlist = useSelector(state => state.watchlist.watchlist)

    const dispatch = useDispatch()

    const addWatchlist = () => {
        // use reducer of watchlist to update count in header
        if (watchlist.includes(movie.id)){
            dispatch(removeFromwatchlist(movie.id))
        } else {
            dispatch(addTowatchlist(movie.id))
        }
        

    }

    return(
    <div className="col-6 col-md-4 col-lg-2" key={movie.id}>
        <div className="card mb-2 border-0 vh-50">
            <img src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} className="card-img-top img-fluid rounded" alt="product thumbnail" />
            <div className="card-body p-0 position-relative rounded mt-1">
                <h5 className="d-inline-block card-title mt-3 w-75" style={{textWrap: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>{movie.title}</h5>
                <p className='position-absolute m-0 text-secondary p-0' style={{bottom: '-5px'}}>{movie.release_date}</p>
                <div className='position-absolute' style={{top: '-30px',left: '15px'}}>
                    <Rating rate={movie.vote_average}/>
                </div>
                <FontAwesomeIcon onClick={addWatchlist} className={`position-absolute fs-3 ${watchlist.includes(movie.id)?"text-warning":"text-black-50"}`} style={{ right: '10px', top: '15px'}} icon={faHeart} />
            </div>
        </div>
    </div>
    )
}