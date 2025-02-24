//-------------4.9 Formularios---------------------
// import { useState } from "react"

// export const Formularios = () => {
   
//     const [formulario, setFormulario] = useState({
//         email: 'joalguzmanal@ittepic.edu.mx',
//         password: '123456'
//     })
//     const onChange = (value, campo) => {
//         setFormulario({
//             ...formulario,
//             [campo]: value
//         });
//     }
//     return (
//         <>
//             <h3>
//                 Formulario
//             </h3>
//             <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Email"
//                 value={formulario.email}
//                 onChange={({target})=> onChange(target.value, 'email')}
//             ></input>
//             <input
//                 type="text"
//                 className="form-control mt-2 mb-2"
//                 placeholder="Password"
//                 value={formulario.password}
//                 onChange={({target})=> onChange(target.value, 'password')}
//             ></input>
   
//             <code>
//                 <pre>
//                     {JSON.stringify(formulario, null, 2)}
//                 </pre>
//             </code>
//         </>
//     )
// }

//-------------4.10 Utilizando custom Hook en formularios---------------------
import { useForm } from "./hooks/useForm"

export const Formularios = () => {

    const { formulario, email, password, onChange } = useForm({
        email: 'joalguzmanal@ittepic.edu.mx',
        password: '123456'   
    });

    return (
        <>
            <h3>
                Formulario
            </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={({ target }) => onChange(target.value, 'email')}
            ></input>

            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={password}
                onChange={({ target }) => onChange(target.value, 'password')}
            ></input>

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}