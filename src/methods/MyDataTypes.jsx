function MyDataTypes() {
    let IdNombre = 'Frank';    
    IdNombre = 706
    console.log("IdNombre:", IdNombre);

    const Alias   = "Yorsh";
    const Nombre  = "Jorge Alberto"; 
    const Apellidos  = "Guzman Alvarez" 
    const NumControl = 20400; 
    const NumControl2 = 751; 
    const FechaReg = new Date(); 
    let Experiencia = 0; 
    let Activo = false;
   
    console.log("Alias:", Alias);
    console.log("Nombre:", Nombre);
    console.log("Apellidos:", Apellidos);
    console.log("Num. Control 1:", NumControl);
    console.log("Num. Control 2:", NumControl2);
    console.log("Fecha de registro:", FechaReg);
    console.log("Experiencia:", Experiencia);
    console.log("Activo:", Activo);

    let Pasatiempos = ['Peliculas', 'Series tv', 'Escuchar musica', 'Videojuegos'];

    Pasatiempos.push('loteria'); 
    Pasatiempos.push('baraja');
    Pasatiempos.push(706); 
    Pasatiempos.push(true);
    console.log("Pasatiempos:", Pasatiempos);
    let Libros = [];
    Libros.push(1533);
    Libros.push(true);
    Libros.push("Seven Eves");
    console.log("Libros:", Libros);
    return (
        <>
            <div>
                <h1>
                    Programa para conocer diferentes Tipos de de Datos
                </h1>
                <h2>
                      Alias: {Alias},    <br/>
                      Id:    {IdNombre}, <br/> 
                      Nombre:{Nombre},   <br/> 
                      Apellidos: {Apellidos}, <br/> 
                      Num. de Control 1: {NumControl}, <br/> 
                      Num. de Control 2: {NumControl2}, <br/> 
                      Fecha de Registro:{FechaReg.toString()}, <br/> 
                      Años de Experiencia: {Experiencia},<br/> 
                      Estatus: {(Activo) ? 'Activo' : 'No Activo'}, <br/> 
                      Pasatiempos: {Pasatiempos}, <br/>
                      Libros: {Libros[0]},    
                              {(Libros[1]) ? 'Activo' : 'No Activo'}, 
                              {Libros[2]}
                </h2>
            </div>
        
        </>
    );
};
export default MyDataTypes;