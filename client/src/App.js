import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage.jsx';
import Home from './components/home/Home';
import GameDetails from './components/gameDetails/GameDetails';
import NavBar from './components/navBar/Navbar';
import SearchName from './components/searchName/SearchName';

function App() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/detail/:id' element={<GameDetails/>} />
            <Route path='/search/:name' element={<SearchName />} />
      </Routes>
    </div>
  );
}

export default App;
