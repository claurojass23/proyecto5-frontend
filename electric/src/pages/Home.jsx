import React from 'react'
import './home.css'
import img from '../img/azul.png'
import face from '../iconos/facebook.png'
import inst from '../iconos/instagram.png'
import gmail from '../iconos/gmail.png'

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

    <div className='productosmasv'>
      <h3>Productos más vendidos</h3>
    </div>

    <footer>
    <h4>Contactanos</h4>
    <div>
    <img className='icono' src={face}></img>
    <img className='icono' src={inst}></img>
    <img className='icono'src={gmail}></img>
    </div>
    
    </footer>
    </div>
     
    </>
  )
}

export default Home;