import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Titulo } from './componentes/Titulo'
import { Resultado } from './componentes/Resultado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo titulo={'Creando Componentes'}/>
      <Resultado primero={5} segundo={5}/>
    </>
  )
}

export default App
