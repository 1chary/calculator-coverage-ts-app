import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Calculator } from './math';

if (process.env.REACT_APP_COVERAGE === 'true') {
  (window as any).__calculator__ = new Calculator();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
