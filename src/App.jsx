import { Route, Routes } from 'react-router-dom'
import SobreMi from "./Components/SobreMi/SobreMi"
import NavBar from "./Components/NavBar/NavBar"
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/SobreMi' element={<SobreMi/>}/>
      </Routes>
    </div>
  )
}

export default App;
