import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home1/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Rutas
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
