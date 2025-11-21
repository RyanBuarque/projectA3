import "../styles/style.css";
import { useNavigate } from "react-router-dom";

function Ulife() {
  const navigate = useNavigate();
  return (
    <div id="loginUlife" className="bg-primary">
          <div className="logoCircle"></div>
          <div className="mb-3 mx-auto p-4 custom-rounded">
            <h1 id="ulifeText">Acesse seu Ulife</h1>
            <label className="form-label">Login</label>
            <input type="email" className="form-control" placeholder="@ulife.com.br" />

            <label className="form-label mt-3">Senha</label>
            <input type="password" className="form-control" placeholder="*****" />

            <button
              onClick={() => navigate('/seguranca')}
              type="button"
              className="btn btn-primary w-50 mt-3"
            >
              Entrar
            </button>
          </div>
        </div>

  );
}

export default Ulife;
