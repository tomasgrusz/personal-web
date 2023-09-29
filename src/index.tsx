import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode>{<App />}</React.StrictMode>);

if (process.env.NODE_ENV !== 'production' && process.env.REACT_APP_ENVIRONMENT !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}
