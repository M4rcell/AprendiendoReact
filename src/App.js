import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// IMPORACIONES DE LOS COMPONENTES

import MiComponete from './compoments/MiComponente'


function HolaMan(nombre,edad){

  // var presentacion =
  //   <div>
  //     <h2>Hola Hola soy : {nombre}</h2>
  //     <h3>Tengo : {edad} años</h3>
  //   </div>

  // SEGUNDA FORMA

  var presentacion =(
    <div>
      <h2>Hola Hola soy : {nombre}</h2>
      <h3>Tengo : {edad} años</h3>
    </div>
  );

  return presentacion;
}

function App() {

  var nombre ="Pepe Man";
  var edad = 20;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Pagina principal de aprendiendo react js</p>

        {HolaMan(nombre,edad)}

        <section className='Componentes'>

          <MiComponete/>

        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
