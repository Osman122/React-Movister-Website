import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Router from "./Router/Router";
import "./App.css";




function App() {
  
  return (
    <BrowserRouter>
      
        
      <Header />
      <div className="container my-5">
        <Router />
      </div>
      
      
      
    </BrowserRouter>

  );
}

export default App;