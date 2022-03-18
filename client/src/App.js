import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage.jsx';
import Home from './components/home/Home';
import GameDetails from './components/gameDetails/gameDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<GameDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
