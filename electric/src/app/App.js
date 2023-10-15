import './App.css';
import React from 'react';
import{Routes,Route,} from 'react-router-dom'
import Home from '../pages/Home'
import Catalogo from './../components/catalogo/Catalogo';
import Iniciarsesion from './../components/iniciarsesion/Iniciarsesion';
import Regístrate from './../components/regístrate/Regístrater'
import Navegador from '../routes/Navegador';
import Perfil from '../components/perfil/Perfil';
/* import { UserContext } from '../contex/UserContext'; */

function App() {
 
  /* const { auth } = useContext(UserContext) ; */

  return (
    <div className="App">
    <Navegador/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Catalogo' element={<Catalogo/>}/>
        {/* {!auth.token && */} <Route path='/Iniciarsesion' element={<Iniciarsesion/>}/>{/* } */}
        <Route path='/Regístrate' element={<Regístrate/>}/>
        <Route path='/Perfil' element={<Perfil/>}/>
    </Routes>

    </div>
  );
}

export default App;
