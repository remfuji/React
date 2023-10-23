import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Spotify from './pages/spotify/Spotify';
import Playlist from './components/spotify/Playlist';


function App() {
 
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Spotify/>}>
          <Route path='Playlist' element={<Playlist/>}/>


        </Route>
      </Routes>
     </BrowserRouter>
      
  );
}

export default App;
