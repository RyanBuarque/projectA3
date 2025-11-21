import { useState } from "react";

export default function AlertDemo() {
  const [alert, setAlert] = useState(null);

  function mostrarAlerta() {
    setAlert({
      message: "Dados enviados com sucesso!",
      type: "warning",
    });

    // remover depois de alguns segundos
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
            <div>{alert.message}</div>
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
          onClick={mostrarAlerta}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
