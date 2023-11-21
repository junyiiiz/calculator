import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Calculator.css'
import './Test.css'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';

//Change CSS Injection Order to inject Custom Styles before Material UI Styles, otherwise 
//Custom Styles are not being applied. 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <App />    
    </StyledEngineProvider>
  </React.StrictMode>,
)
