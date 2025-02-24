function MyObject(){

    const persona = {  
        nombre: 'Jorge',  
        edad: 22,  
        direccion: {  
            pais: 'Mexico',  
            estado: 'Nayarit',  
            ciudad: 'Tepic',  
            direccion: 'Ameca #111'  
        }
};
    console.log("JSON Persona:", JSON.stringify(persona, null, 2))  

    return (  
            <div>  
                <h3>Objetos Literales</h3>  
                <code>  
                    <pre>  
                        {JSON.stringify(persona, null, 2)}  
                    </pre>  
                </code>  
            </div>  
        );
}
export default MyObject;