import React from 'react'
import { Card, Button } from 'react-bootstrap'
import  { useEffect, useState } from 'react';




function Productos() {

  
  const[productos,setProductos]= useState([])
  useEffect(()=>{
   fetch("http://localhost:3001/productos/getProdList").then(req =>req.json()).then(response=>{
     console.log(response)
     setProductos(response.data)
   },[])

  })

  return (
    <div className='cards-wrap'>
      
         {productos.map( (producto, index) => {
           return( 
             <Card className='card-menu' key={index} style={{ width: '18rem', background: 'transparent' }}>
             <Card.Img variant="top" src="" />
             <Card.Body>
               <Card.Title className='nombre'>{producto.nombre}</Card.Title>
               <Card.Text>
               {producto.descripcion}
               </Card.Text>
               <Card.Text>
               {producto.precio}
               </Card.Text>
               <Card.Text>
               {producto.existencias}
               </Card.Text>
               <Button variant="primary">Comprar</Button>
             </Card.Body>
           </Card>
           )
         })} 
    </div>
    

       
        
       
       
  
  )
}

export default Productos