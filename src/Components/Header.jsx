import {Nav,Navbar}  from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {faFilm,faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageContext from '../Context/LanguageContext';
import { useContext } from 'react';

function Header() {
  const {lang,setLang} = useContext(LanguageContext)

  const changeLang = () => {
    setLang(lang==="En"?"Ar":"En")
  }

  return (
    <Navbar className="bg-body-tertiary ps-5 pe-5 bg-warning sticky-top justify-content-between">
        <NavLink className="navbar-brand fs-4" to="/home"><FontAwesomeIcon icon={faFilm} /> Moviester</NavLink>
        <Nav  className="d-flex align-items-center">
          <NavLink className="nav-link pe-3 fw-bold" onClick={changeLang}> {lang} </NavLink> 
          <NavLink className="nav-link fs-3" to="/watchlist"><FontAwesomeIcon icon={faHeart} /></NavLink>
          <span className='bg-danger'>0</span>
        </Nav>
    </Navbar>
  );
}
export default Header;