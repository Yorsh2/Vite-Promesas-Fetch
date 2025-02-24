
import { useCounter } from './hooks/useCounter';

export const ContadorHook = () => { 

    const {valor, acumular} = useCounter(0);

    return ( 
    <div> 
        <h1>Introducción a Type Script with React</h1>
        <h2>Contador Hook: <small>{valor}</small></h2> 

        <button className="Button1" 
            onClick={()=> acumular(1)}> 
            Sumar (+1)
        </button>  
        &nbsp;
        <button className="Button2" 
            onClick={()=> acumular(-1)}>
            Restar (-1)
        </button>
    </div> 
    ) 
};