import React from 'react';
import {useState} from 'react';

export const Contador = () => { 
    const [valor, setValorContador] = useState(0);

    const acumular = (numero)=> {
        setValorContador(valor + numero);
    };

    // let valorActualContador = 10;

    return ( 
        <div> 
            <center>
            <h1>
                Aprender useState
            </h1>

            <h2>
                Contador: <small>{valor}</small>
            </h2> 

            <button onClick={()=> acumular(1)}> 
                Sumar (+1)
            </button>  
            &nbsp;
            <button onClick={()=> acumular(-1)}>
                Restar (-1)
            </button>
            </center>
        </div> 
    ) 
};