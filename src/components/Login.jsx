import { useReducer, useEffect} from "react";

const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
};

const authReducer = (state, action) => { 
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            };
            // break;

        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: 'MITOKEN1234567890',
                username,
                nombre,
            };
            // break;

        default:
            return state;
            // break;
    }
};


export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);
    
    useEffect(() => { 
        
        setTimeout(() => { 
                dispatch({ type: 'logout' });  
            }, 1000); //2500
        }, []); 
    
        if (state.validando) { 
            return ( 
                <> 
                    <h3>Login</h3> 
                    <div className="btn btn-warning">Validando Información...</div>    
                </> 
            ); 
        };
    
        const login = () => {
            dispatch({
                type: 'login',
                payload: {
                    username: 'Jorge',
                    nombre: 'Jorge Guzman'
                }
            })
        };

        const logout = () => {
            dispatch({
                type: 'logout',
                payload: {
                    username: '',
                    nombre: ''
                }
            })
        };

    return (
        <>
           <h3>Login</h3>
            {!state.token ? (
                <div className="alert alert-danger">
                    No Autenticado...
                </div>
            ) : (
                <div className="alert alert-success">
                    Autenticado como {state.username}
                </div>
            )}
            { 
                ( !state.token ) 
                ? (   
                    <button 
                        className="btn btn-primary"
                        onClick={ login }
                    >
                        Login    
                    </button>  
                )
                :
                (
                    <button 
                        className="btn btn-danger"
                        onClick={ logout }
                    >
                        Logout   
                    </button> 
                )
            }
        </>
    );
};