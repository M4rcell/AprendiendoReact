import React, { Component } from "react";

// IMPORACIONES DE LOS COMPONENTES

import MiComponete from "./MiComponente";
import Peliculas from "./peliculas";

class SeccionPrueba extends Component {

   // Declaracion de Propiedades 
   contador = 0;

// DECLARACION DE STATE LARGO
/*    constructor(props){

    super(props);

    this.state={

        contador:0

    };
   } */
   // DECLARACION DE STATE CORTA

state={
    contador:0

};

  render() {
    var nombre = "Pepe Man";
    var edad = 20;

    return (
      <section id="content">
        <h2 className="subheader"> Ultimos Articulos</h2>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Pagina principal de aprendiendo react js</p>
        
        <h2 className="subheader"> Funciones de JSX Basico</h2>
        {this.HolaMan(nombre, edad)}

        <h2 className="subheader"> Componentes</h2>
        <section className="Componentes">
          <MiComponete />

          <Peliculas />
        </section>

        <h2 className="subheader"> Estado</h2>
     
        <p>contador : {this.state.contador}</p>

        <p>
   {/*  <input type="button" value="Sumar" onClick={this.sumar.bind(this)}/>*/}
            <input type="button" value="Sumar" onClick={this.sumar}/>
            <input type="button"  value="Restar"  onClick={this.restar}/>
        </p>

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
 /*  
  sumar(){
     
    //this.contador=this.contador+1;
    this.setState({
        contador:(this.state.contador+1)
    });

  }

  restar(){
   // this.contador=this.contador-1;

   this.setState({
    contador:(this.state.contador-1)
   });


  } */
  // OTRA FORMA DE DEFINER METODOS
   
  sumar =(e)=>{
     
    //this.contador=this.contador+1;
    this.setState({
        contador:(this.state.contador+1)
    });

  }

  restar=(e)=>{
   // this.contador=this.contador-1;

   this.setState({
    contador:(this.state.contador-1)
   });


  }

  
}

export default SeccionPrueba;
