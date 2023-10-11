import React from 'react'
import './iniciarsesion.css'
import { FormLabel, Form} from 'react-bootstrap'
import { useState } from 'react'

function Iniciarsesion() {
  const[form, setForm] = useState({
    
    email: "",
    password: ""
    
    
   })


  async function onSave (event){

    event.PreventDefault() 
    console.log("prueba")
     
    /* console.log(form) */
  /*  await fetch("http://localhost:3004/app/auth/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(form)
    }).then(resp=>resp.json()).then(result=> console.log(result)) */
     
   } 

   const onChange = (e) =>{
    setForm({
      ...form,[e.target.name] : e.target.value
    })

    /* console.log("prueba 123") */

 }
  return (

    <>

    <di>
    <h1>Iniciar Sesion</h1>
      <Form onSubmit={onSave} className='form-reserva'>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
      <Form.Label>Usuario</Form.Label>
      {/* formdata.nombre y el onChange poner */}
      <Form.Control type='string' value={''}  onChange={onChange} placeholder='Escribe tu nombre de usuario' name='nombre'/>
     <Form.Label>Contraseña</Form.Label>
      <Form.Control type='password'  value={''} onChange={onChange} placeholder='Escribe tu contraseña' name='password'/>
      
       <Form.Text className='text-muted'>
        ¿Has olvidado tu contraseña? 
       </Form.Text>

      </Form.Group>
     
      <button type="submit" className="btn btn-light">Entrar</button>
      </Form>
    </di>
    </>
  )
}

export default Iniciarsesion;