import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx'
import MyFunctions from './functions/MyFunctions.jsx';
import MyPromises from './functions/MyPromises.jsx';
import MyPromisesAll from './functions/MyPromisesAll.jsx';
import MyPromisesRace from './functions/MyPromisesRace.jsx';
import MyFetchAPIs from './functions/MyFetchAPIs.jsx';
import MyFetchPost from './functions/MyFetchPost.jsx';
import MyFetchPut from './functions/MyFetchPut.jsx';
import MyFetchBlob from './functions/MyFetchBlob.jsx';

createRoot(document.getElementById('root')).render(
  // <MyPromisesRace/>,
  // <MyPromisesAll/>,
  // <MyFunctions/> 
  //  <App /> 
  // <StrictMode>
  // </StrictMode>,
  // <MyFetchBlob/>
  // <MyFetchAPIs/>
  <MyFetchPut/>
  // <MyFetchPut/>
)
