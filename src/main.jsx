import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx'
//-------------------FUNCIONES-----------------------------
import MyFunctions from './functions/MyFunctions.jsx';
import MyPromises from './functions/MyPromises.jsx';
import MyPromisesAll from './functions/MyPromisesAll.jsx';
import MyPromisesRace from './functions/MyPromisesRace.jsx';
import MyFetchAPIs from './functions/MyFetchAPIs.jsx';
import MyFetchPost from './functions/MyFetchPost.jsx';
import MyFetchPut from './functions/MyFetchPut.jsx';
import MyFetchBlob from './functions/MyFetchBlob.jsx';
//-------------------FUNCIONES-----------------------------
//-------------------METODOS-----------------------------
import MyDataTypes from './methods/MyDataTypes.jsx';
import MyObject from './methods/MyObjects.jsx';
//-------------------METODOS-----------------------------
//-------------------COMPONENTES-----------------------------
import { Contador } from './components/Contador.jsx';
import { ContadorHook } from './components/ContadorHook.jsx';
import { Login } from './components/Login.jsx';
import { Usuarios } from './components/Usuarios.jsx';
import { Formularios } from './components/Formularios.jsx';
//-------------------COMPONENTES-----------------------------

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
  // -----------Funciones-----------
  // <MyPromisesRace/>,
  // <MyPromisesAll/>,
  // <MyFunctions/> 
  //  <App /> 
  // <MyFetchBlob/>
  // <MyFetchAPIs/>
  // <MyFetchPut/>
  // <MyFetchPut/>
  // -----------Metodos-----------
  // <MyDataTypes/>
  // <MyObject/>
  // ----------Componentes----------
  // <Contador/>
  // <ContadorHook/>
  // <Login/>
  // <Usuarios/>
  <Formularios/>
)
