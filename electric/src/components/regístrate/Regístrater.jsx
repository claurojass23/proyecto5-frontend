import React from 'react'
import './regístrate.css'
import {Form} from 'react-bootstrap'
import { useState } from 'react'

function Regístrate() {
 
 const[form, setForm] = useState({
  name: "",
  lastname:"",
  email: "",
  password: ""
  
  
 })

 async function onSave (event){
  event.PreventDefault()  
  console.log(form)
 await fetch("http://localhost:3001/app/auth/signup",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(form)
  }).then(resp=>resp.json()).then(result=> console.log(result))
   
 } 

 const onChange = (e) =>{
    setForm({
      ...form,[e.target.name] : e.target.value
    })

 }

   return (
    <>
    <div>
      <h1>Registro de Usuario</h1>
      <Form onSubmit={onSave} className='form-reserva'>
      <Form.Group>
      <Form.Label>Nombre</Form.Label>
     <Form.Control type='text' name='name' value={form.name}  onChange={onChange} placeholder='Escribe tu nombre'/>
      <Form.Label>Apellido</Form.Label>
      <Form.Control type='text'  value={form.lastname} onChange={onChange} placeholder='Escribe tu Email' name='lastname'/>
      <Form.Label>Correo Electrónico</Form.Label>
      <Form.Control type='email'  value={form.email} onChange={onChange} placeholder='Escribe tu Email' name='email'/>
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type='password'  value={form.password} onChange={onChange} placeholder='Escribe una contraseña' name='password'/>
      
      

      <Form.Text>
         Tu informacion es privada y no sera compartida o reutilizada
        </Form.Text>

      </Form.Group>
     
      <button type="submit" >Guardar</button>
      </Form>
    </div>
    </>
  )
}

export default Regístrate;