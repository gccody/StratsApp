import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import './tailwind.css';
import './index.css';
import Sticky from './components/Sticky';
import HamburgerMenu from './components/HamburgerMenu';
import * as serviceWorkerRegistration from './service-worker-registration';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Router>
      <HamburgerMenu />
      <App />
      <Sticky />
    </Router>
  // </React.StrictMode>
);

// Check that service workers are supported
serviceWorkerRegistration.register();
