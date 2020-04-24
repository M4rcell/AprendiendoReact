import React from 'react';
import "./assets/css/App.css";


import Header from "./compoments/hearder";
import Slider from "./compoments/slider";
import Sidebar from "./compoments/sidebar";
import footer from './compoments/footer';
import Footer from "./compoments/footer";
import SeccionPruebas from './compoments/seccionPruebas';



function App() {
 

  return (
    <div className="App">
      <Header />

      <Slider />

      <div className="center">

        <SeccionPruebas/>
       

        <Sidebar />

        <div className="clearfix"></div>
      </div> {/*  END DIV CENTER*/ }

      <Footer/>

    </div>
  );
}

export default App;
