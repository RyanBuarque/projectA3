import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from 'react-router-dom'
import Rotas from './Routes'

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{
          maxWidth: "400px",
          margin: "0 auto",
          width: "100%",
          overflowX: "hidden"
        }}>
          <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App
