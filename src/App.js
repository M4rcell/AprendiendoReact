import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

// IMPORACIONES DE LOS COMPONENTES

import MiComponete from "./compoments/MiComponente";
import Peliculas from "./compoments/peliculas";

import Header from "./compoments/hearder";
import Slider from "./compoments/slider";
import Sidebar from "./compoments/sidebar";
import footer from './compoments/footer';
import Footer from "./compoments/footer";

function HolaMan(nombre, edad) {
  // var presentacion =
  //   <div>
  //     <h2>Hola Hola soy : {nombre}</h2>
  //     <h3>Tengo : {edad} años</h3>
  //   </div>

  // SEGUNDA FORMA

  var presentacion = (
    <div>
      <h2>Hola Hola soy : {nombre}</h2>
      <h3>Tengo : {edad} años</h3>
    </div>
  );

  return presentacion;
}

function App() {
  var nombre = "Pepe Man";
  var edad = 20;

  return (
    <div className="App">
      <Header />

      <Slider />

      <div className="center">
        <section id="content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p> Pagina principal de aprendiendo react js</p>

          {HolaMan(nombre, edad)} 

          <section className="Componentes">
            <MiComponete /> 

            <Peliculas />
          </section>
        </section>

        <Sidebar />

        <div className="clearfix"></div>
      </div> {/*  END DIV CENTER*/ }

      <Footer/>

    </div>
  );
}

export default App;
