import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import './tailwind.css';
import './index.css';
import StickyFooter from './components/StickyFooter';
import HamburgerMenu from './components/HamburgerMenu';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Router>
      <HamburgerMenu />
      <App />
      <StickyFooter />
    </Router>
  // </React.StrictMode>
);
