import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import './catalogo.css';
import kit from './img-catalogo/kit.png';
import * as Icon from "react-icons/bs";
import { CartContext } from '../../contex/Cart';
import { useNavigate } from 'react-router-dom';



function Productos() {
  const { addProductToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  const verMas = () => {
    navigate(`/CatalogoDetalle`);
  };

  

 

  useEffect(() => {
    fetch("https://api-electric.onrender.com/productos/getProdList")
      .then((req) => req.json())
      .then((response) => {
        console.log(response);
        setProductos(response.data);
      }, []);
  });

  return (
    <div className='cards-wrap'>
      {productos.map((producto, index) => {
        return (
          <Card className='card' style={{ width: '18rem' }}>
            <Card.Img variant='top' src={kit} />
            <Card.Body>
              <Card.Title className='nombre'>{producto.nombre}</Card.Title>
              <Card.Text>{producto.descripcion}</Card.Text>
              <Button className='button' variant='dark'>${producto.precio}</Button>
              <Card.Text>existencia{producto.existencias}</Card.Text>
            </Card.Body>
            <div className='conte-icon'>
              <Button variant='primary' onClick={() => verMas(producto.id)}>Ver Mas</Button>
              <Button variant='primary' className='icon' onClick={() => addProductToCart(producto)}>
                <Icon.BsFillCartPlusFill />
              </Button>
            </div>
          </Card>
        );
      })}
      </div>
  );
}

export default Productos;
