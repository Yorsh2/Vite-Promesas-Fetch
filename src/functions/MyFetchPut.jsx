function MyFetchPut(){
    
    let usuario = {
        nombre:'Jorge',
        edad:22
    }

    fetch('https://reqres.in/api/users/', {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json()).then(console.log)
    .catch(error => {
        console.log('Error en la peticion API PUT');
        console.log(error);
    });

    return (
        <>
            <div>
                <h1>
                    Programa para FETCH Put
                </h1>
            </div>
        
        </>
    );

}

export default MyFetchPut;