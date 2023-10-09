import './App.css';
import{Routes,Route,} from 'react-router-dom'
import Home from '../pages/Home'
import Catalogo from './../components/catalogo/Catalogo';
import Iniciarsesion from './../components/iniciarsesion/Iniciarsesion';
import Regístrate from './../components/regístrate/Regístrater'
import Navegador from '../routes/Navegador';

function App() {
  return (
    <div className="App">
    <Navegador/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Catalogo' element={<Catalogo/>}/>
        <Route path='/Iniciarsesion' element={<Iniciarsesion/>}/>
        <Route path='/Regístrate' element={<Regístrate/>}/>
    </Routes>

    </div>
  );
}

export default App;
