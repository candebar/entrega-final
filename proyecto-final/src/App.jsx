import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Componentes/Footer/Footer'
import Header from './Componentes/Header/Header'
import Seccion from './Componentes/Seccion/Seccion'
import Canchas from './Componentes/Canchas/Canchas'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Formulario from './Componentes/Formulario/Formulario'

function App() {

  return (
    <Router>
      <div className='contenedor-total'>
        <Header />
        
        <Routes>
          <Route path="/Seccion" element={<Seccion />} />
          <Route path="/Canchas" element={<Canchas />} />
          
          <Route path="/Reservas" element={<Formulario />} />

        </Routes>
        
        <Footer />


      </div>
    </Router>
  )
}

export default App
