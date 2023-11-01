import React from 'react'
import './home.css'
import img from '../img/azul.png'
import * as Icono from "react-icons/ai";
import * as Icon from "react-icons/bs";

function Home() {
  return (
    <>
    <div className='contenedorFrase'>
    <img className='HomeImg' src={img}></img>
    <span className='h2'>Conectando el mundo a través de Internet</span>
    <div className='conte2'>
    <p>Los mejores productos y servisios los tenemos para ti</p>
     <button>OFERTAS ESPECIALES AQUI</button>
    </div>

   <footer>
    <h4>Contactanos</h4>
    <div className='divIcons'>
    <Icon.BsInstagram className='Icons'/>
    <Icon.BsFacebook className='Icons' />
    <Icono.AiOutlineMail className='Icons' />
    <Icon.BsTelegram className='Icons' />
    <Icon.BsTelephonePlus className='Icons' />
    </div>
    
    </footer>
    </div>
     
    </>
  )
}

export default Home;