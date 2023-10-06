import {Nav,Navbar}  from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {faFilm,faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageContext from '../Context/LanguageContext';
import { useContext, useEffect } from 'react';
import { axiosInstance } from '../api/config';
import {useSelector} from 'react-redux'

function Header() {
  const {lang,setLang} = useContext(LanguageContext)
  const watchlist = useSelector(state => state.watchlist.watchlist)

  /*
  useEffect(()=>{
    axiosInstance.get(`3/account/${process.env.REACT_APP_TMDB_USER_ID}/watchlist/movies`).then((res)=>{
      console.log('header',res)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  */
 
  const changeLang = () => {
    setLang(lang==="En"?"Ar":"En")
  }

  return (
    <Navbar className="bg-body-tertiary ps-5 pe-5 bg-warning sticky-top justify-content-between">
        <NavLink className="navbar-brand fs-4" to="/home"><FontAwesomeIcon icon={faFilm} /> Moviester</NavLink>
        <Nav  className="d-flex align-items-center">
          <NavLink className="nav-link pe-3 fw-bold" onClick={changeLang}> {lang} </NavLink> 
          <NavLink className="nav-link fs-5" to="/watchlist"><FontAwesomeIcon icon={faHeart} /> Watchhlist</NavLink>
          {watchlist.length?<span className='bg-danger'>{watchlist.length}</span>:<></>}
        </Nav>
    </Navbar>
  );
}
export default Header;