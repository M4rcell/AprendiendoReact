
import React, {Component} from 'react';
import MensajeEstatico  from './MensajeEstatico';

class Peliculas extends Component{

    render(){
        
        return(
             
        <div id="peliculas">

            <h4>Soy Componente de Peliculas</h4>

            <MensajeEstatico/>
            <MensajeEstatico/>

        </div>
              
        );
    }
}

export default Peliculas;