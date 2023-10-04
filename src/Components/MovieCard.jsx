import './MovieCard.css';
import Rating from '../Components/Rating';

export default function MovieCard (props) {
    const {movie} = props

    return(
    <div className="col-6 col-md-4 col-lg-2" key={movie.id}>
        <div className="card h-100 mb-2">
            <img src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} className="card-img-top img-fluid" alt="product thumbnail" />
            <div className="card-body rounded mt-1 d-flex flex-column justify-content-between">
                <div>
                    <h5 className="d-inline-block card-title text-wrap">{movie.title}</h5>
                    <Rating rate={movie.vote_average}/>
                </div>

            </div>
        </div>
    </div>
    )
}