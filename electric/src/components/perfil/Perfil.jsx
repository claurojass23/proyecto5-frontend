import React from 'react'
import './perfil.css'

export default function Perfil() {
  return (
    <div className='div-perfil'>
     
     <div className='contenedor-menu-p'>
       
     <ul>
        <h2 className='titulos'>MI PERFIL</h2>
        <li>Historial</li>
        <li>Cambios</li>
        <li>Favoritos</li>
        
      </ul>
      


      <ul>
        <h2 className='titulos'>CONFIGURACION DE</h2>
        <li>Cuenta</li>
        <li>Perfil</li>
        <li>Contraseña</li>
        <li>Email</li>
      </ul>
      

     </div>

     <div className='micuenta'>
      <h2>MI CUENTA</h2>
      <h4>Bievenido a Electric</h4>
     </div>
    </div>
  )
}
