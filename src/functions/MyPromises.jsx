function MyPromises() {

//---------------------------------------------------------------------------------
    // function fcnSumarUno( numero ){
    //     var promesa = new Promise(function(resolve, reject){
    //         setTimeout(function(){
    //            resolve( numero + 1 );
    //             }, 3000);
    //     });
    //     return promesa;
    // }
//---------------------------------------------------------------------------------
    //Llamado de la funcion y promesa 1
    // fcnSumarUno(5).then(function(nuevoNumero){
    //     console.log('Resultado: '+nuevoNumero)
    // });
//---------------------------------------------------------------------------------
    //FIC: llamado de la funcion y promesa
    // fcnSumarUno(5).then( nuevoNumero=>{
    //     console.log('Resultado: '+nuevoNumero)
    // });
//---------------------------------------------------------------------------------
    //FIC: llamado de la funcion y promesa
    //de forma recursiva de manera encadenada.
    // fcnSumarUno(5).then( nuevoNumero=>{
    //     console.log("Resultado 1:",nuevoNumero);
    //     return fcnSumarUno(nuevoNumero);
    // }).then( nuevoNumero=>{
    //     console.log("Resultado 2:",nuevoNumero);
    //     return fcnSumarUno(nuevoNumero);
    // }).then( nuevoNumero=>{
    //     console.log("Resultado 3:",nuevoNumero);
    // });
//---------------------------------------------------------------------------------
    // fcnSumarUno(5)
    // .then( fcnSumarUno)
    // .then( fcnSumarUno)
    // .then( nuevoNumero=>{
    // console.log("Resultado:",nuevoNumero);
    // });
//---------------------------------------------------------------------------------
    //FIC: llamado de la funcion y promesa 
    //de forma recursiva y optimizada y con 
    //validacion de error. 
    // fcnSumarUno(5) 
    //     .then( fcnSumarUno) 
    //     .then( fcnSumarUno) 
    //     .then( nuevoNumero=>{ 
    //     console.log("Resultado:",nuevoNumero); 
    // }) 
    // .catch(error =>{ 
    //     console.log('Error en la Promesa', error); 
    // });
//---------------------------------------------------------------------------------
    
//3.3 Programa con promesas recursivas.
//---------------------------------------------------------------------------------    
    console.log('¡Hola Mundo!');
    function fcnSumarUno( numero ){
        var promesa = new Promise(function(resolve, reject){
            if (numero >= 7 ){
                reject('El numero ya es muy alto');
            }
            setTimeout(function(){
                resolve( numero + 1 );
                }, 500);
        });
    return promesa;
    };

    fcnSumarUno(5).then( nuevoNumero=>{
        console.log("Resultado 1:",nuevoNumero);
        return fcnSumarUno(nuevoNumero);
    }).then( nuevoNumero=>{
        console.log("Resultado 2:",nuevoNumero);
        return fcnSumarUno(nuevoNumero);
    }).then( nuevoNumero=>{
        console.log("Resultado 3:",nuevoNumero);
    })
    .catch(error =>{ 
        console.error('Error en la Promesa', error); 
    });
    
    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas
                </h1>
            </div>
        
        </>
    );
};
export default MyPromises;