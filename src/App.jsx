import { Routes, Route } from 'react-router-dom'

import Inicio from './views/Inicio/Inicio'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/Inicio" element={<Inicio />}/>
      </Routes>
    </div>
  )
}

export default App;