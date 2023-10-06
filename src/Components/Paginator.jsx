import { useContext } from "react";
import PageContext from '../Context/LanguageContext';

export default function Paginator() {
  const {page,setPage} = useContext(PageContext)

  const changePage = (p) => {
    setPage(p)
  }
  return (
    <nav aria-label="Page navigation example" style={{paddingBottom:"10px"}}>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${page===1?'disabled':""}`}>
          <p className="page-link" onClick={()=>changePage(page-1)} tabIndex="-1" aria-disabled={page===1?"true":"false"}>Previous</p>
        </li>
        <li className={`page-item ${page===1?'active':""}`}><p className="page-link" onClick={()=>changePage(1)}>1</p></li>
        <li className={`page-item ${page===2?'active':""}`}><p className="page-link" onClick={()=>changePage(2)}>2</p></li>
        <li className={`page-item ${page===3?'active':""}`}><p className="page-link" onClick={()=>changePage(3)}>3</p></li>
        <li className={`page-item ${page===4?'active':""}`}><p className="page-link" onClick={()=>changePage(4)}>4</p></li>
        <li className={`page-item ${page===5?'active':""}`}><p className="page-link" onClick={()=>changePage(5)}>5</p></li>
        <li className={`page-item ${page===5?'disabled':""}`}>
          <p className="page-link" onClick={()=>changePage(page+1)} tabIndex="-1" aria-disabled={page===5?"true":"false"}>Next</p>
        </li>
      </ul>
    </nav>
  );
}