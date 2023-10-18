import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Forum from './pages/Forum';


function App() {
 
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Forum/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
