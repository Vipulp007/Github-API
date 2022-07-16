import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-iuo-csg1.us.auth0.com'
      clientId='lq6z2sCZXgAR1ZTxTItIYrYN5RGWMwx9'
      redirectUri='http://localhost:3000/user'
    >
      <AppProvider>
        <App />
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);
