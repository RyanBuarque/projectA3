import { Routes, Route } from 'react-router-dom'
import Alerta from './pages/Alerta'
import Ulife from './pages/Ulife'
import Seguranca from './pages/Seguranca'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Ulife />} />
      <Route path="/seguranca" element={<Seguranca />} />
      <Route path="/alerta" element={<Alerta />} />
    </Routes>
  )
}

export default Rotas
