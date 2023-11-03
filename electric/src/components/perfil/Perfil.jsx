import React from 'react';
import './perfil.css';
import Cart from '../../carrito/carrito'; 

export default function Perfil() {
  return (
    <div className='div-perfil'>
      <div className='micuenta'>
        <h2>MI CUENTA</h2>
        <h4>Bienvenido a Electric</h4>
      </div>
      
      <Cart />
    </div>
  );
}
