import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home'
import SobreMi from "./Components/SobreMi/SobreMi"
import NavBar from "./Components/NavBar/NavBar"
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App;
