import "../styles/style.css";
import { useNavigate } from "react-router-dom";

function Ulife() {
  const navigate = useNavigate();
  return (
    <div id="numero" className="p-3">
          <div className="p-4 bg-personalizado">
            <label className="form-label">Digite seu Numero aqui</label>
            <input type="number" className="form-control" placeholder="75123456789" />

            <button
              onClick={() => navigate('/seguranca')}
              type="button"
              className="btn btn-primary w-50 mt-3"
            >
              Salvar
            </button>
          </div>
        </div>

  );
}

export default Ulife;
