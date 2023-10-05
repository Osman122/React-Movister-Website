import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Router from "./Router/Router";
import LanguageContext from "./Context/LanguageContext";
import { useState } from "react";


function App() {
  const [lang, setLang] = useState("En");

  return (
    <BrowserRouter>
        <LanguageContext.Provider value={{ lang, setLang }}>
          <Header />
          <div className="container my-5">
            <Router />
          </div>
        </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
