import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
  );
}

export default App;
