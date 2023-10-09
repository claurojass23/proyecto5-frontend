import React from 'react'
import './iniciarsesion.css'
import { FormLabel, Form} from 'react-bootstrap'

function Iniciarsesion() {
  return (
    <>
    <di>
    <h1>Iniciar Sesion</h1>
      <Form onSubmit={''} className='form-reserva'>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
      <Form.Label>Usuario</Form.Label>
      {/* formdata.nombre y el onChange poner */}
      <Form.Control type='string' value={''}  onChange={''} placeholder='Escribe tu nombre de usuario' name='nombre'/>
     <Form.Label>Contraseña</Form.Label>
      <Form.Control type='password'  value={''} onChange={''} placeholder='Escribe tu contraseña' name='password'/>
      
       <Form.Text className='text-muted'>
        ¿Has olvidado tu contraseña? 
       </Form.Text>

      </Form.Group>
     
      <button type="submit" class="btn btn-light">Entrar</button>
      </Form>
    </di>
    </>
  )
}

export default Iniciarsesion;