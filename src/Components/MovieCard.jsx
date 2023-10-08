import './MovieCard.css';
import Rating from '../Components/Rating';
import { useNavigate } from 'react-router-dom';
import AddWatchLater from '../Components/AddWatchLater'

export default function MovieCard (props) {
    const {movie} = props
    const navigate = useNavigate()

    return <div className="col-6 col-md-4 col-lg-2">
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
                    <AddWatchLater movie={movie} key={movie.id}/>
                </div>
                </div>
            </div>  
}