import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../api/config";
import Stars from "../Components/Starbar";

export default function MoviePage () {
        const {id} = useParams()
        const [ movie, setMovie ] = useState(null)
    
        useEffect(() => {
            window.scrollTo(0,0) 
            axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
              setMovie(res.data)
            })
            .catch((err) => console.log(err));
        },[]);
    
    
        return movie? (<div className="container">
           
           <div
      
        className="card   ">
        <div className="row g-0 ">
          <div className="col-md-4">
            <img src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} className="card-img-top col-4 mb-2" alt="..." 
            />
           
          </div>
          <div class="col-lg-6 ms-5 " >
            <div class="card-body">
              <h3 class="card-title  fw-bolder">{movie.title}</h3>
              <h5 className='text-muted'>{movie.release_date}</h5>
              <Stars rating={movie.vote_average/2}/>
              </div>
              <p class="card-text p-1" style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>
              {movie.overview}
              </p>
              </div>
            </div>
   </div>
            
        </div>) : <></>
    }