import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import Recipro from './Pages/ReciproDetail';
import { useState } from 'react';
import './index.css';
import Nom from './Pages/NomDetail';
import CyberBug from './Pages/CyberDetail'
import Racko from './Pages/RackoDetail';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/portfolios" exact>
                <PortfliosPage />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
              <Route path="/recipro" exact>
                <Recipro />
              </Route>
              <Route path="/nom" exact>
                <Nom />
              </Route>
              <Route path="/cyberbug" exact>
                <CyberBug />
              </Route>
              <Route path="/racko" exact>
                <Racko />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
