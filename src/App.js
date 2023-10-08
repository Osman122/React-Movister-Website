import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Router from "./Router/Router";
import LanguageContext from "./Context/LanguageContext";
import { useEffect, useState } from "react";
import { axiosInstance } from "./api/config";
import { Alert } from "react-bootstrap";

export default function App() {
  const [lang, setLang] = useState("En");

  const authenticate = async () => {
    const res_tok = await axiosInstance.get("/3/authentication/token/new")
    window.sessionStorage.movister_token = res_tok.data.request_token;
    window.sessionStorage.movister_token_expiry = new Date(res_tok.data.expires_at);

    const res_auth = await axiosInstance.post("/3/authentication/token/validate_with_login", {
            username: process.env.REACT_APP_TMDB_USER_NAME,
            password: process.env.REACT_APP_TMDB_USER_PASSWORD,
            request_token: window.sessionStorage.movister_token,
          })


    const res_session = await axiosInstance.post("/3/authentication/session/new", {
      request_token: window.sessionStorage.movister_token,
    })

    window.sessionStorage.session_id = res_session.data.session_id;


    const res_profile = await axiosInstance.get(`/3/account?session_id=${window.sessionStorage.session_id}`)
    window.sessionStorage.profile_id = res_profile.data.id;


    if (res_auth.data.success && res_session.data.success)
    {
      document.getElementById("success-auth").hidden = false;
      setTimeout(() => {
        document.getElementById("success-auth").hidden = true;
      }, 5000);
    } else {
      document.getElementById("fail-auth").hidden = false;
        setTimeout(() => {
          document.getElementById("fail-auth").hidden = true;
          authenticate();
      }, 3000);



   
  };}

  useEffect(() => {
    if (
      !window.sessionStorage.movister_token ||
      Date.parse(window.sessionStorage.movister_token_expiry) < new Date()
    ) {
    authenticate();
    }
  }, []);

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ lang, setLang }}>
          <Header />
          <Alert id="success-auth" variant="success" className="m-2" hidden={true}>
            Successfully Authenticated with TMDB!
            Welcome {process.env.REACT_APP_TMDB_USER_NAME}!
            Your session id is : {window.sessionStorage.session_id} 
            Your TMDB profile id is : {window.sessionStorage.profile_id}
          </Alert>
          <Alert id="fail-auth" variant="danger" className="m-2" hidden={true}>
            Authentication Failed with TMDB!
            Trying again ...
          </Alert>

          <div className="container my-5">
            <Router />
          </div>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}