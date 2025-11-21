import { Routes, Route } from 'react-router-dom'
import Alerta from './pages/Alerta'
import Ulife from './pages/Ulife'
import Numero from './pages/Numero'
import Seguranca from './pages/Seguranca'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Ulife />} />
      <Route path="/Numero" element={<Numero/>} />
      <Route path="/seguranca" element={<Seguranca />} />
      <Route path="/alerta" element={<Alerta />} />
    </Routes>
  )
}

export default Rotas
