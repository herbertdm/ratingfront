import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Menu} from './componentes/Menu';
import { Ingresar } from './paginas/Ingresar';
import {Inicio} from './paginas/Inicio';
import {Consultas} from './paginas/Consultas';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Navigate to="/Inicio"/>}/>
        <Route path="/Inicio" element={<Inicio/>}/>
        <Route path="/Ingresar" element={<Ingresar/>}/>
        <Route path='/Consultas' element={<Consultas/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
