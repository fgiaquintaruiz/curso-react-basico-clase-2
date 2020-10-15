import React from 'react';
import Cabecera from './components/Cabecera';
import PieDePagina from './components/PieDePagina';
import ListaDeTareas from './components/ListaDeTareas';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <Cabecera titulo="React todo list"></Cabecera>
      <div className="container">
        <ListaDeTareas></ListaDeTareas>
      </div>
      <PieDePagina texto="Todolist" autor="Fabio" anio="2020"></PieDePagina>
    </div>
  );
}

export default App;
