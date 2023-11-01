import './navegador.css'
import { NavLink } from 'react-router-dom'
import img from '../img/chip.png'
import { UserContext } from '../contex/UserContext';
import { useContext } from 'react';





function Navegador() {
  const { auth } = useContext(UserContext);
 


  const cerrarSesion = () => {
   
    localStorage.removeItem('token'); 
    
    window.location.href = '/'; 
  };
  
  
return (
    <nav className='navegador'>
      <div className='conteiner'>
        <div className='subContenedor'>
          <img src={img} className='img' alt="Logo"></img>
          <div className='logopages'>Electronic</div>
        </div>
        <ul className='Navmenu'>
          <li className='NavItem'><NavLink className='NavLink' to="/">Home</NavLink></li>
          <li className='NavItem'><NavLink className='NavLink' to='/Catalogo'>Nuestro Catalogo</NavLink></li>
          {!auth.token && <li className='NavItem'><NavLink className='NavLink' to='/Regístrate'>Regístrate</NavLink></li>}
          {!auth.token && <li className='NavItem'><NavLink className='NavLink' to='Iniciarsesion'>Iniciar sesión</NavLink></li>}
          {auth.token && <li className='NavItem'><NavLink className='NavLink' to="/CerrarSesion" onClick={cerrarSesion}>Cerrar Sesión</NavLink></li>}
          {auth.token &&<li className='NavItem'><NavLink className='NavLink' to="/Perfil">Perfil</NavLink></li>}
          
        </ul>
      </div>
    </nav>
  )
}

export default Navegador;
