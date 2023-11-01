import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'; 
import './iniciarsesion.css'
import { UserContext } from '../../contex/UserContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function IniciarSesion(){

  const {auth, login} = useContext(UserContext);
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    
    const navigate = useNavigate();
    
    
    async function onLogin(event) {
        event.preventDefault()
        
        await  fetch("http://localhost:3004/app/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then(resp => resp.json())
        .then(result =>  {
            
            login(form.email, result.token)
            
            navigate('/Perfil')
        }).catch(error =>{
            Swal.fire(error)
        })

    }

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    useEffect(() =>{
        if(auth.token){
            navigate('/Perfil')
        }
    },[])

  return (

    <>

    <di>
    <h1>Iniciar Sesion</h1>
      <Form onSubmit={onLogin} className='form-reserva'>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
      <Form.Label>Correo</Form.Label>
      <Form.Control type='string' value={form.email}  onChange={onChange} placeholder='Escribe tu correo' name='email'/>
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type='password'  value={form.password} onChange={onChange} placeholder='Escribe tu contraseña' name='password'/>
      
       <Form.Text className='text-muted'>
        ¿Has olvidado tu contraseña? 
       </Form.Text>

      </Form.Group>
     
      <Button type="submit" className="btn btn-light">Entrar</Button>
      </Form>
    </di>
    </>

  )

}

export default IniciarSesion