import React from 'react'
import { Card, Button } from 'react-bootstrap'
import  { useEffect, useState } from 'react';
import './catalogo.css'
import kit from './img-catalogo/kit.png'
import * as Icon from "react-icons/bs";



function Productos() {

  
  const[productos,setProductos]= useState([])
  useEffect(()=>{
   fetch("http://localhost:3004/productos/getProdList").then(req =>req.json()).then(response=>{
     console.log(response)
     setProductos(response.data)
   },[])

  })

  return (
    <div className='cards-wrap'>
      
         {productos.map( (producto, index) => {
           return( 
             <Card className='card'  style={{ width: '18rem' }}>
             <Card.Img variant="top" src={kit} />
             <Card.Body>
               <Card.Title className='nombre'>{producto.nombre}</Card.Title>
               <Card.Text>
               {producto.descripcion}
               </Card.Text>
               <Button className='button' variant="dark">${producto.precio}</Button>
               <Card.Text>existencia{producto.existencias}</Card.Text>
              
             </Card.Body>
             <div className='conte-icon'>
             <Button variant="primary">Comprar</Button>
             <Button variant="primary" className='icon'><Icon.BsFillCartPlusFill/></Button>
             </div>
           </Card>
           )
         })} 
    </div>
    

       
        
       
       
  
  )
}

export default Productos