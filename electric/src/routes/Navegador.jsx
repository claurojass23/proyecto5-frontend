import './navegador.css'
import { NavLink } from 'react-router-dom'
import img from '../img/chip.png'
/* import { UserContext } from '../contex/UserContext'; */

function Navegador(){

    /* const { auth } = useContext(UserContext); */
 
    return(
       
        <>
        <nav className='navegador'>
            <div className='conteiner'>
            <div className='subContenedor'> 
            <img src={img} className='img'></img>
            <div className='logopages'>Electronic</div>
            </div>
             <ul className='Navmenu'>
                <li className='NavItem'><NavLink className='NavLink' to="/">Home</NavLink></li>
                <li className='NavItem'><NavLink className='NavLink' to='/Catalogo'>Nuestro Catalogo</NavLink></li>
                {/* {!auth.token && */} <li className='NavItem'><NavLink className='NavLink' to='/Regístrate'>Regístrate</NavLink></li>{/* } */}
                <li className='NavItem'><NavLink className='NavLink' to='Iniciarsesion'>Iniciar sesion</NavLink></li>
                <li className='NavItem'><NavLink className='NavLink' to="/Iniciarsesion" >Cerrar Sesion</NavLink></li>
             </ul>
            </div>
        </nav>
        </>
    )


}

export default Navegador;