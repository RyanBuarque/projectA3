import "../styles/style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Ulife() {
  const navigate = useNavigate();

  // Estados para salvar login e senha
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function handleEntrar() {
    // Exemplo: salvando no localStorage (opcional)
    localStorage.setItem("ulifeLogin", login);
    localStorage.setItem("ulifeSenha", senha);

    // Navegar para a próxima página
    navigate("/numero");
  }

  return (
    <div id="loginUlife">
      <div className="logoCircle"></div>

      <div className="mb-3 mx-auto p-4 custom-rounded">
        <h1 id="ulifeText">Acesse seu Ulife</h1>

        <label className="form-label">Login</label>
        <input
          type="email"
          className="form-control"
          placeholder="@ulife.com.br"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <label className="form-label mt-3">Senha</label>
        <input
          type="password"
          className="form-control"
          placeholder="*****"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          onClick={handleEntrar}
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
