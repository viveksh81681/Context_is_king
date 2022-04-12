import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { RegistartionContextProvider } from './components/RegistrationContext/RegistrationContext'


ReactDOM.render(
  <React.StrictMode>
    <RegistartionContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </RegistartionContextProvider>
  
   
  </React.StrictMode>,
  document.getElementById('root')
)
