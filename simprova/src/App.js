import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Posts from './components/PostToChose';
import Content from './components/Content'
import Forum from './pages/Forum';


function App() {
 
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Forum />} />
            </Routes>
        </Router>
  );
}

export default App;
