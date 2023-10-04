import Header from './components/Header';
import Router from './Router/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Header/>
          <Router/>
        </div>
    </BrowserRouter>

  );
}

export default App;
