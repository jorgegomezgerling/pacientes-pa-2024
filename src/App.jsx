import { useState } from 'react'
import { Header } from './components/Header'
import { Formulario } from './components/Formulario'
import { ListadoRequerimientos } from './components/ListadoRequerimientos'
import './App.css'

function App() {

  const [requerimientos, setRequerimientos] = useState([])
 
  return (
    
<div className="min-h-screen bg-gray-100">
    <div className="container mx-auto mt-20">      
      <Header /> 

      <div className='mt-12 flex'>
        
      <Formulario
      requerimientos={requerimientos}
      setRequerimientos={setRequerimientos}
       /> 
      <ListadoRequerimientos
        requerimientos={requerimientos}
        setRequerimientos={setRequerimientos}
       />   
      </div> 
    </div>
    </div>
  )
}

export default App
