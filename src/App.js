import React from 'react';
import "./assets/css/App.css";


import Header from "./compoments/hearder";
import Slider from "./compoments/slider";
import Sidebar from "./compoments/sidebar";
import footer from './compoments/footer';
import Footer from "./compoments/footer";
import SeccionPruebas from './compoments/seccionPruebas';

import Peliculas from './compoments/peliculas';

function App() {

  var butonString="Ir al blog"
 

  return (
    <div className="App">
      <Header />

      <Slider 
       title ="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
       btn   = {butonString}
       />

      <div className="center">

        <Peliculas/>
       

        <Sidebar />

        <div className="clearfix"></div>
      </div> {/*  END DIV CENTER*/ }

      <Footer/>

    </div>
  );
}

export default App;
