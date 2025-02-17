function MyFetchAPIs() {
//------------------------------------------Origenes de Fetch------------------------------------------
    // console.log("¡Hola Mundo!");
    // var request = new XMLHttpRequest();
    // request.open('GET', 'https://reqres.in/api/users', true );
    // request.send(null);
    // request.onreadystatechange = function( state ){ 
    //     if (request.readyState === 4) {
    //         //la respuesta obtiene un string.
    //         var resp = request.response;
    //         //Solo se transforma la cadena en formato 
    //         var respObj = JSON.parse(resp);
    //         //Solo se envia el resultado a la consola.
    //         console.log( respObj );
    //         //Se obtienen solo la pagina actual.
    //         console.log( respObj.page);
    //         //Se obtienen solo la data de los usuarios.
    //         console.log( respObj.data);
    //     } 
    // };
//------------------------------------------GET------------------------------------------
    function fcnXMLHttpRequest() {
        console.log("¡Execute GET API by XMLHttpRequest!");
        var request = new XMLHttpRequest();
        request.open('GET', 'https://reqres.in/api/users', true);
        request.send(null);
        return new Promise(function(resolve, reject){       
            request.onreadystatechange = function( state ){     
                console.log(request);      
                if (request.readyState === 4) {
                    var resp = request.response;
                    var respObj = JSON.parse(resp);
                    resolve(respObj.data);
                };         
           }; 
        });
    };

    function fcnFetchRequest() {
        console.log("¡Execute GET API by Fetch!");
        fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(respObj => {
            console.log("Response Fetch:",respObj.data);
        });
    };

   fcnXMLHttpRequest().then (response=> {
    console.log('Response XMLHttp:', response);
   });
   
   fcnFetchRequest();
//------------------------------------------GET------------------------------------------
    return (
        <>
            <div>
                <h1>
                    Programa para FETCH APIs
                </h1>
            </div>
        
        </>
    );
};
export default MyFetchAPIs;