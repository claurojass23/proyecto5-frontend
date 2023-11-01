import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './app/App';
import { UserProvider } from './contex/UserContext';
import { CartProvider } from './contex/Cart';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
   <UserProvider>
    <CartProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </CartProvider>
   </UserProvider>
  </React.StrictMode>
);