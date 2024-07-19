import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Valorant from './games/Valorant';
import RainbowSixSiege from './games/RainbowSixSiege';
import ApexLegends from './games/ApexLegends';
import General from './General';
import GeneralFPS from './General/FPS';
import Privacy from './pages/Privacy';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/general" element={<General />} />
        <Route path="/general/fps" element={<GeneralFPS />} />

        <Route path="/valorant" element={<Valorant />} />

        <Route path="/rainbowsixsiege" element={<RainbowSixSiege />} />

        <Route path="/apexlegends" element={<ApexLegends />} />

        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="*" element={<div>404</div>} />
      </Routes>
  );
}

export default App;
