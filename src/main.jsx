import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import './index.css';

const isProd = process.env.NODE_ENV === 'production';
if ( isProd ) disableReactDevTools();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);