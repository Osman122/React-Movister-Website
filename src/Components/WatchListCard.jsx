import './MovieCard.css';
import Stars from './Starbar';


export default function WatchListCard (props) {
    const {movie} = props

    return(  <div
        className="card mx-5 my-2  p-4 col-lg-5  "
        style={{maxWidth: "800px", maxHeight:"330px" ,justifyContent:"space-between" }}>
        <div className="row g-0 ">
          <div style={{alignItems: "center", maxHeight:"250px"}} className="col-md-4">
            <img src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} className="card-img-top col-4 mb-2" alt="..." 
            style={{maxHeight:"260px"}}/>
           
          </div>
          <div class="col-lg-5 ms-5 ">
            <div class="card-body">
              <h3 class="card-title  fw-bolder">{movie.title}</h3>
              <h5 className='text-muted'>{movie.release_date}</h5>
              <Stars rating={movie.vote_average/2}/>
              </div>
              <p class="card-text " style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>
              {movie.overview}
              </p>
              </div>
            </div>
   </div>
    )
}



/* <div className="col-6 col-md-4 col-lg-2" style={{  height:"330px" ,width:"640px"}} key={movie.id}>
        <div className="card row " style={{objectFit:"contain"}} >
            
            <img src={`${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`} style={{objectFit: "contain",height:"300px" }} className="col-md-6  my-5 rounded " alt="product thumbnail" />
            
             <div className="col-md-6  my-5 ">
                <div>
                    <h2 className="">{movie.title}</h2>
                        
                </div>
                <span><h5>{movie.relase_date}</h5></span>
                <div><p>{movie.overview}</p></div>


            </div>
        </div>
    </div>*/






               
                
                
                
        