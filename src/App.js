import './App.css';
import {BaseColaboradores} from './database/data';
import { useState } from 'react';
import Colaborador from './components/Colaborador'
import Busqueda from './components/Busqueda';
import { Nuevocolaborador } from './components/Nuevocolaborador';

function App() {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [buscar, setBuscar] = useState("");


  let result = [];
  if(!buscar) {
    result = colaboradores;
  } else {
    result = colaboradores.filter((colaborador) =>
    colaborador.nombre
    .toLocaleLowerCase()
    .includes(buscar.toLocaleLowerCase()))
  }

  return (
    <div className="App">
      <div className='header'>
        <Busqueda setBuscar={setBuscar}/>
       </div>
       <div className='maincontainer'>
        <div >
            <Colaborador colaboradores={colaboradores} setColaboradores={setColaboradores}/>
          </div>
          <div className='list'>
            <Nuevocolaborador colaboradores={result}/>
          </div>
        </div>
      
    </div>
  );
}

export default App;
