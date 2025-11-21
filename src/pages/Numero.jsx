import "../styles/style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Numero() {
  const [numero, setNumero] = useState("");
  const navigate = useNavigate();

  function salvarNumero() {
    localStorage.setItem("numeroUsuario", numero);
    navigate("/seguranca");
  }

  return (
    <div id="numero" className="p-3">
      <div className="p-4 bg-personalizado">
        <label className="form-label">Digite seu Número aqui</label>

        <input 
          type="number" 
          className="form-control"
          placeholder="75123456789"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <button
          onClick={salvarNumero}
          type="button"
          className="btn btn-primary w-50 mt-3"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Numero;
