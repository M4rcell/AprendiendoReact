
//  import Objet React and loading modulo react
import React , {Component} from 'react';

//PRIMERA  FORMA
//class MiComponente extends React.Component{
// SEGUNDA FORMA 

class MiComponente extends Component{

    //metodo render se encarga de mostrar la vista al usurio
    render(){

        let  receta={
            nombre:'Pizza',
            ingrediente:['Tomate','Queso','Jamon Cocido','Pan'],
            calorias:400
        };

        return (
            //  LO NORMAL
           // <h1>Hola , Soy el Componete llamado MiConponente</h1>

            //  DOS FORMAS DE DE IMPRIMIR ETIQUTAS HTML DE 2 A MAS 
            //PRIMER FORMA
           /*  <React.Fragment>
                <h1>Hola , Soy el Componete llamado MiConponente</h1>
                <h2> Estoy Probando el  componente</h2>
            <hr/>
           
            </React.Fragment> */
            //SEGUNDA FORMA
            <div className="mi-componente">
                <h1>Hola , Soy el Componete llamado MiConponente</h1>
                <h2> Estoy Probando el  componente</h2>
                <hr/>
                
                <h1> INGREDIENTES PARA UN SANWCHES </h1>
                <h1>{'Receta   : ' + receta.nombre }</h1>
                <h2>{'Calorias : ' + receta.calorias}</h2>

                <ol>
                    {
                    receta.ingrediente.map((ingrediente,i)=>{

                        console.log(ingrediente);

                        return (
                            <li key={i}>
                                {ingrediente}
                            </li>
                        )

                    })
                    }
                </ol>


            </div>

        );
    }
}
//  exportarlo par poder utilizarlo en cualquier vista
//

export default MiComponente;
