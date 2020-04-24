import React, { Component } from "react";

// IMPORACIONES DE LOS COMPONENTES

import MiComponete from "./MiComponente";
import Peliculas from "./peliculas";


class SeccionPrueba extends Component {

  render() {
    var nombre = "Pepe Man";
    var edad = 20;
    
    return (
      <section id="content">
          <h2 className="subheader" > Ultimos Articulos</h2>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Pagina principal de aprendiendo react js</p>

        {this.HolaMan(nombre, edad)}

        <section className="Componentes">
          <MiComponete />

          <Peliculas />
        </section>
      </section>
    );
  }

//Funcion Fecha HolaMan=()=>{}

   HolaMan(nombre, edad) {
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
}

export default SeccionPrueba;
