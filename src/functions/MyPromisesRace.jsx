function MyPromisesRace() {
    // Si el tiempo es mayor que sumar rapido, no 
    function fcnSumarLento( numero ){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
    };


    let fcnSumarRapido = (numero)=>{
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                //resolve( numero + 1 );
                reject('Error en la promesa de la funcion Sumar Rapido');
            }, 1000);//300
        });
    };

    Promise.race([fcnSumarLento(5), fcnSumarRapido(10)]).then(respuesta =>{
        console.log('Respuesta:', respuesta);
    }).catch(error=>{
        console.log("Error en la respuesta: ", error);
    });

    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas Race
                </h1>
            </div>
        
        </>
    );
};

export default MyPromisesRace;
