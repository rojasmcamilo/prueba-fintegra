//Components
import Cross from './components/Cross';
import AgePredictor from './components/AgePredictor';
import PrimaryMenu from './components/PrimaryMenu';

import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimaryMenu/>} />
        <Route path="/cross" element={<Cross/>} />
        <Route path="/agepredictor" element={<AgePredictor/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
