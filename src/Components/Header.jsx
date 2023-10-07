import {Nav,Navbar}  from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {faFilm,faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageContext from '../Context/LanguageContext';
import { useContext, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {setWatchlist} from '../store/Slices/watchlistSlice'
import { axiosInstance } from '../api/config';

function Header() {
  const {lang,setLang} = useContext(LanguageContext)
  const watchlist = useSelector(state => state.watchlist.watchlist)

  function changeLang () {
    setLang(lang==="En"?"Ar":"En")
  }

  const dispatch = useDispatch()

  async function getWatchlist () {
    const res = await axiosInstance.get(`/3/account/${window.sessionStorage.profile_id}/watchlist/movies`)
    dispatch(setWatchlist(res.data.results.map(movie=>movie.id)))
  }

  useEffect(()=>{
    getWatchlist()
  },[])

  
  return <>{watchlist ? <Navbar className="bg-body-tertiary ps-5 pe-5 bg-warning sticky-top justify-content-between">
        <NavLink className="navbar-brand fs-4" to="/home"><FontAwesomeIcon icon={faFilm} /> Moviester</NavLink>
        <Nav  className="d-flex align-items-center">
          <NavLink className="nav-link pe-3 fw-bold" onClick={changeLang}> {lang} </NavLink> 
          <NavLink className="nav-link fs-5" to="/watchlist"><FontAwesomeIcon icon={faHeart} /> Watchlist</NavLink>
          {watchlist.length?<span className='bg-danger'>{watchlist.length}</span>:<></>}
        </Nav>
    </Navbar>
    :<></>}</>

  ;
}

export default Header;