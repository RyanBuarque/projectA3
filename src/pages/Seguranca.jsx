import "../styles/style.css";
import efeito1 from "../img/efeito1.png";
import efeito3trig from "../img/efeito3trig.png";
import notebook from "../img/notebook.png";
import teclado from "../img/teclado.png";
import vr from "../img/vr.png";

import { useNavigate } from "react-router-dom";

function Seguranca() {
const navigate = useNavigate();
  return (
    <div id="seguranca" class=" align-items-center d-flex flex-column">
      <div class="container efeito1">
        <img src={efeito1} class="img-fluid" alt="..." />
      </div>
      <div class="container efeito2">
        <img src={efeito3trig} class="img-fluid" alt="..." />
      </div>
      <div class="container efeito3">
        <img src={efeito3trig} class="img-fluid" alt="..." />
      </div>
      <div class="container efeito4">
        <img src={efeito3trig} class="img-fluid" alt="..." />
      </div>
      <div class="container efeito5">
        <img src={efeito1} class="img-fluid" alt="..." />
      </div>
      <div class="container efeito6">
        <img src={efeito1} class="img-fluid" alt="..." />
      </div>
      <div id="vr" class="d-flex align-items-center container mt-5 mb-5s">
        <div className="p-2 vr-img">
          <img src={vr} class="img-fluid" alt="..." />
        </div>
        <div className="p-3 bg-personalizado">
          <h1>A Barreira Invisível</h1>
          <h2>
            Autenticação de 2 Fatores: A Defesa Quase Perfeita
          </h2>
          <dt className="mt-4">Por Que Usar:</dt>
          <dd>A 2FA é a defesa mais eficaz contra o roubo de credenciais</dd>
          <dt>Eficácia Comprovada:</dt>
          <dd>
            A Autenticação Multifator (MFA/2FA) pode bloquear mais de 99,9% dos
            ataques de comprometimento de contas.
          </dd>
        </div>
      </div>
      <hr class="border border-3 opacity-75 border-personalizada"></hr>
      <div id="notebook" class="d-flex align-items-center container mt-5 mb-5">
        <div className="bg-personalizado p-3">
          <h1>Gestão de Credenciais</h1>
          <h2>
            Senhas Exclusivas e Fortes: Quebre o Ciclo de Vazamentos
          </h2>
          <dt>Necessidade de Senhas Exclusivas:</dt>
          <dd>
            O maior risco é o ataque de Credential Stuffing (Preenchimento de
            Credenciais). Use uma senha única para cada serviço.
          </dd>
          <dt>Troque a Senha Padrão:</dt>
          <dd>
            O fato de 50% dos usuários não terem trocado a senha padrão do Ulife
            representa uma vulnerabilidade crítica. Trocar é uma ação básica de
            higiene para impedir o acesso imediato.
          </dd>
          <dt>Ferramenta Essencial: </dt>
          <dd>
            Utilize um Gerenciador de Senhas para criar e armazenar credenciais
            fortes e únicas.
          </dd>
        </div>
        <div className="notebook-img">
          <img src={notebook} class="img-fluid" alt="..." />
        </div>
      </div>
      <hr class="border border-3 opacity-75 border-personalizada2"></hr>
      <div id="teclado" className="position-relative">
        <img
          src={teclado}
          className="img-fluid"
          alt="..."
        />

        <div className="position-absolute top-50 start-50 translate-middle bg-personalizado p-2">
          <h1>Segurança Digital</h1>
          <h2>Ações Essenciais para você</h2>
        </div>
      </div>
              <hr class="border border-3 opacity-75 border-personalizada"></hr>
      <div id="4" class="p-3">
        <div className="container bg-personalizado p-3">
          <h1>Sua Identidade Digital Não É Descartável</h1>
          <h2>
            Proteja Seu Acesso: Os 3 maiores riscos de segurança identificados
            em nossa pesquisa.
          </h2>
          <dt>Perigo de Senhas Repetidas:</dt>
          <dd>Risco de Efeito Dominó!</dd>
          <dt>Senha Padrão Crítica:</dt>
          <dd>Falha de segurança grave e de fácil exploração</dd>
          <dt>Proteção Fraca:</dt>
          <dd>
            Falta de utilização do 2FA, O acesso à sua conta pode ser garantido
            se a senha vazar!
          </dd>
        </div>
      </div>
      <hr class="border border-3 opacity-75 border-personalizada2"></hr>
      <div id="5" class="p-3">
        <div className="container bg-personalizado p-3">
          <h1>Conexões Seguras e Próximos Passos</h1>
          <h2>Redes Abertas: O Perigo Invisível e a Ação Imediata</h2>
          <dt>O Risco de Interceptação:</dt>
          <dd>
            A falta de criptografia nessas redes permite que qualquer indivíduo
            dentro do alcance possa capturar e analisar os dados que estão a ser
            transmitidos.
          </dd>
          <dt>Ação:</dt>
          <dd>Use uma VPN ou dados móveis para transações sensíveis.</dd>
          <dt>Conclusão e Próximo Passo:</dt>
          <dd>
            Mude seus hábitos hoje! A segurança da informação é uma
            responsabilidade contínua.
          </dd>
        </div>
      </div>
      <hr class="border border-3 opacity-75 border-personalizada"></hr>
      <div id="6" class="mb-5 p-3">
        <div className="container bg-personalizado p-3">
          <h1>Higiene e Proteção do Dispositivo</h1>
          <h2>Proteja Seu Hardware: O Antivírus é Fundamental</h2>
          <dt>O Risco: </dt>
          <dd>
            Aumenta a probabilidade de infecção por malware (trojans ou
            ransomware), que podem roubar dados ou bloquear o dispositivo.
          </dd>
          <dt>Ação: </dt>
          <dd>
            Mantenha o antivírus atualizado e em funcionamento , é a linha de
            defesa fundamental contra malwares.
          </dd>
        </div>
      </div>
      <div className="p-5 bg-personalizado w-personalizado">

            <button
              onClick={() => navigate('/alerta')}
              type="button"
              className="btn btn-danger"
            >
              Alerta
            </button>
          </div>
    </div>
  );
}

export default Seguranca;
