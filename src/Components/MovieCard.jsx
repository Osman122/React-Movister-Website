import './MovieCard.css'
import {CircularProgress} from '@mui/material'

export default function MovieCard (props) {
    const {movie} = props

    return(
    <div className="col" key={movie.id}>
        <div className="card h-100 p-2 sec-border">
            <img src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} className="card-img-top img-fluid" alt="product thumbnail" />
            <div className="card-body rounded mt-1 d-flex flex-column justify-content-between">
                <div>
                    <h5 className="d-inline-block card-title w-75 text-wrap">{movie.title}</h5>
                    <h5 className="d-inline float-end">{movie.vote_average}</h5>
                    <CircularProgress variant="determinate" value={movie.vote_average*10} />
                    <p className="card-text mt-2 text-dark p-1">{movie.overview}</p>
                </div>

            </div>
        </div>
    </div>
    )
}