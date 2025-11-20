import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Ulife from './pages/Ulife'
import Seguranca from './pages/Seguranca'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Ulife />} />
      <Route path="/seguranca" element={<Seguranca />} />
    </Routes>
  )
}

export default Rotas
