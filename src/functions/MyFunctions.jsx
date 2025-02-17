
function MyFunctions(){
//3.2 Programa con llamado de funciones anidadas.
//---------------------------------------------------------------------------------   
    function fcnSumarUno( numero, fcnResultadoCallBack ){
        // return numero+1;
        setTimeout(function(){
            fcnResultadoCallBack( numero + 1 );
        }, 800);
    }

    fcnSumarUno(5,function(resultadoNuevo){
        // console.log("Resultado: "+resultadoNuevo)
        console.log('Resultado 1: '+resultadoNuevo)
        fcnSumarUno(resultadoNuevo,function(nuevoValor){
            console.log('Resultado 2: '+nuevoValor)
            }
        );    
    }
    );

    // let Resultado = fcnSumarUno();
    // console.log('Resultado: '+Resultado);  
    console.log('My function - My Function - Programas de funciones')
    return(
    <>
        <div>
            <h1>My Function - Programas de funciones</h1>
        </div>
    </>
    );
};


export default MyFunctions;