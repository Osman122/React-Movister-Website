import { useNavigate } from 'react-router-dom';
import './MovieCard.css';
import Stars from './Starbar';
import AddWatchLater from '../Components/AddWatchLater'



export default function WatchListCard (props) {
  const navigate = useNavigate()
  const showMovieDetails = (id) => {
    navigate(`/Movie/${id}`)
  }
    const {movie} = props

    return(  <div
        className="card mx-5 my-2  p-4 col-lg-5  "
        style={{maxWidth: "800px", maxHeight:"330px" ,justifyContent:"space-between" }}>
        <div className="row g-0 ">
          <div style={{alignItems: "center", maxHeight:"250px"}} className="col-md-4">
            <img onClick={() => showMovieDetails(movie.id)} src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} className="card-img-top col-4 mb-2" alt="..." 
            style={{maxHeight:"260px"}}/>
           
          </div>
          <div className="col-lg-6 ms-5 " >
            <div className="card-body">
              <h3 className="card-title  fw-bolder" onClick={() => showMovieDetails(movie.id)}>{movie.title}</h3>
              <h5 className='text-muted'>{movie.release_date}</h5>
              <Stars rating={movie.vote_average/2}/>
              </div>
              <p class="card-text p-1" style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>
              {movie.overview}
              </p>
              <AddWatchLater movie={movie} key={movie}/>
              </div>
            </div>
   </div>
    )
}