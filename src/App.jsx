import { useState } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import './App.css'
import { Form1 } from './components/Forms/Form1'
import { Form2 } from './components/Forms/Form2'
import { Home } from './components/Home/Home'
import { Users } from './components/Users/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='registration/one' element={<Form1/>}/>
      <Route path='registration/two' element={<Form2/>}/> 
      <Route path='/users' element={<Users/>}/> 
    </Routes>
   
    </div>
  )
}

export default App
