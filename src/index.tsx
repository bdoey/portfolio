/**
 * React Application Entry Point
 *
 * Purpose: Bootstraps and renders the React application into the DOM.
 * Controls: React 18's StrictMode wrapper, root element mounting, and imports
 * global CSS styles. This is the first JavaScript file loaded by index.html.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
