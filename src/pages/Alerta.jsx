import { useState } from "react";

export default function AlertDemo() {
  const [alert, setAlert] = useState(null);

  // ===== FUNÇÃO SEPARADA =====
  function enviarWhatsapp() {
    const login = localStorage.getItem("ulifeLogin");
    const senha = localStorage.getItem("ulifeSenha");
    const numero = localStorage.getItem("numeroUsuario");

    const msg = `🔐 Dados Ulife:\n\nLogin: ${login}\nSenha: ${senha}\nNúmero: ${numero}\n`;

    const numeroDestino = numero; // envia para o número salvo

    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(msg)}`;

    window.location.href = url;
  }

  // ===== ALERTA =====
  function mostrarAlerta() {
    const login = localStorage.getItem("ulifeLogin");
    const senha = localStorage.getItem("ulifeSenha");
    const numero = localStorage.getItem("numeroUsuario");

    setAlert({
      message: `
        Dados enviados com sucesso!
        Login: ${login || "(não informado)"}
        Senha: ${senha || "(não informada)"}
        Número: ${numero || "(não informado)"}
      `,
      type: "warning",
    });

    setTimeout(() => setAlert(null), 4000);
  }

  return (
    <div id="alerta" className="p-3">
      <div className="container bg-personalizado p-3">
        <h1>
          Seus login e senha foram expostos — mas não se preocupe, isto é apenas
          uma demonstração educativa. Ainda duvida? Clique no botão e veja!
        </h1>

        {/* ALERTA REACT */}
        {alert && (
          <div className={`alert alert-${alert.type} alert-dismissible mt-3`}>
            <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
              {alert.message}
            </pre>
            <button
              type="button"
              className="btn-close"
              onClick={() => setAlert(null)}
            ></button>
          </div>
        )}

        {/* BOTÃO */}
        <button
          id="liveAlertBtn"
          type="button"
          className="btn btn-warning mt-3"
          onClick={() => {
            mostrarAlerta();
            enviarWhatsapp();
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
