import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './index.css'
import './index.scss';
import { AuthContextProider } from './context/Authcontext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProider>
      {' '}
      <App />
    </AuthContextProider>
  </React.StrictMode>
);
