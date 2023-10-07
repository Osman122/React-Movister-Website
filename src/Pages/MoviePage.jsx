import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../api/config";
import Stars from "../Components/Starbar";
import { addTowatchlist, removeFromwatchlist } from "../store/Slices/watchlistSlice";
import {useSelector, useDispatch} from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import MovieCard from "../Components/MovieCard";

export default function MoviePage () {
        const {id} = useParams()
        const [ movie, setMovie ] = useState(null)
        const [ recomedmovie, setRecomedMovie ] = useState(null)
        const dispatch =useDispatch()
        const watchlist = useSelector(state => state.watchlist.watchlist)

        const addWatchlist = () => {
          // use reducer of watchlist to update count in header
          if (watchlist.includes(movie.id)){
              dispatch(removeFromwatchlist(movie.id))
          } else {
              dispatch(addTowatchlist(movie.id))
          }
      }
      useEffect(() => {
          
        axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
          setRecomedMovie(res.data)
          console.log(res.data)
        })
        .catch((err) => console.log(err));
    },[]);
    
        useEffect(() => {
          
            axiosInstance.get(`${process.env.REACT_APP_BASE_URL}/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
              setMovie(res.data)
              
            })
            .catch((err) => console.log(err));
        },[]);
    
    
        return movie? (<div className="container" style={{}}>
           
           <div
      
        className="card border-0  "style={{height:"500px"}}>
        <div className="row  ">
          <div className="col-md-3 rounded" style={{alignSelf:"center", height:"100%", backgroundSize:"cover",backgroundPosition:"center" ,backgroundImage:`url(${process.env.REACT_APP_IMAGE_URL}${movie.poster_path})`}}>
         
           
          </div>
          <div class="col-lg-7 ms-5 md-6 " >
            <div class="card-body">
              <h3 class="card-title  fw-bolder d-inline">{movie.title}</h3>
              <FontAwesomeIcon onClick={addWatchlist} className={`position-absolute fs-3 ${watchlist.includes(movie.id)?"text-warning":"text-black-50"}`} style={{ right: '80px', top: '30px'}} icon={faHeart} />
              <h5 className='text-muted'>{movie.release_date}</h5>
            <div className="d-inline" style={{display:"inline"}}>  <Stars className="d-inline " rating={movie.vote_average/2}/> </div> 
            <p className="d-inline ms-2" >{movie.vote_count}</p> 
              </div>
              <p class="card-text p-1" >
              {movie.overview}
              </p>

              <div>
                { movie.genres?(
                
                movie.genres.map((name,index)=>{
                return <span class="badge badge-pill p-2 bg-warning m-2" style={{color:"black"}} key={index}>{movie.genres[index].name}</span>
                 })
                ):
                 <></> 
                }
                <div style={{paddingTop:"20px"}}>
                  <p className="d-inline" style={{fontSize:"15px"}}> <span className="fw-bold px-2">Duration: </span>   { (movie.runtime/60).toFixed(2)} h</p>
                   <p className="d-inline px-4" style={{fontSize:"15px"}}><span className="fw-bold px-2">Languages: </span> 
                    {movie.spoken_languages.map((english_name,index)=>{
                    return <span className="px-2"> {movie.spoken_languages[index].english_name} </span> }) } 
                    
                    </p>
                  
                </div> 
                 <img style={{display:"block", width:"40%",height:"150px", padding:"30px 0px 30px 0px"}} src={`${process.env.REACT_APP_IMAGE_URL}${movie.production_companies[0].logo_path}`} alt=" picturee!" srcset="" />
               <a className=" " href={movie.homepage}>
                <span className="badge border border-warning text-secondary">
                 Website  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
               <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
               <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                 </svg>
               </span >
                         
               
                 
                 </a>
  

              </div>
                </div>
            </div>
   </div>
            <hr />
            <h2>Recomindation</h2>

            
                 
            <div style={{whiteSpace:"nowrap", overflow:"auto"}}>
            {recomedmovie?
            (<div className="container-fluid " >
               <div className="d-flex flex-row flex-nowrap " style={{justifyContent:"space-around"}}>
            {
            
           recomedmovie.results.map((movie)=>
           {return   <MovieCard className="m-5" movie ={movie}  /> }
           
                    )
              
              } 
              </div>
              
              </div>
              ):<>osman</>}
              

              </div>
              
   
              
            </div>
            
            ) : <></>
       
       
    }












    