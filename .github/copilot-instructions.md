<!-- Copilot / AI agent instructions for projectA3 -->
# Instruções rápidas para agentes AI

Este repositório é uma aplicação React (criada com Create React App). As observações abaixo focam em conhecimento prático que torna um agente imediatamente produtivo aqui.

**Arquitetura (big picture):**
- **Tipo de app:** SPA cliente (sem backend neste repositório).
- **Entrypoints:** `src/index.js` cria a raíz React; `src/App.js` monta o `BrowserRouter`.
- **Rotas:** definidas em `src/Routes.js` (ex.: `/` -> `Ulife`, `/seguranca` -> `Seguranca`).
- **Páginas:** componentes de página ficam em `src/pages/` e usam extensão `.jsx`.
- **Estilos:** CSS local em `src/styles/` (ex.: `ulife.css`) + Bootstrap via `bootstrap` em `package.json`.

**Fluxos de dados e interações comuns:**
- Navegação programática usa `useNavigate()` de `react-router-dom` (veja `src/pages/Ulife.jsx`).
- Formulários simples manipulam apenas UI; não há chamadas a APIs no código atual.

**Dependências e integração:**
- Routing: `react-router-dom` (v7). Atualize `src/Routes.js` ao adicionar páginas.
- UI: `bootstrap` importado em `src/App.js`.
- Ferramentas de build/test: `react-scripts` (scripts padrão em `package.json`).

**Comandos dev / build / test:**
- Instalar dependências: `npm install`
- Executar em modo dev: `npm start` (servidor dev do CRA, normalmente em http://localhost:3000)
- Produzir build de produção: `npm run build`
- Testes (padrão CRA): `npm test` (não há testes presentes atualmente)

Exemplo (PowerShell) para iniciar rápido:
```
cd C:\Users\Ryan\Desktop\projectA3; npm install; npm start
```

**Padrões e convenções do projeto:**
- Componentes de página: colocar em `src/pages/` e exportar como default.
- Rotas: todas rotas centralizadas em `src/Routes.js` — preferir adicionar rota aqui em vez de espalhar `Route` por outros componentes.
- Estilos locais: importe CSS do componente com caminho relativo (`import "../styles/ulife.css"`).
- Use classes Bootstrap para layout (ex.: `btn`, `form-control`) e adicione classes custom quando necessário (ex.: `custom-rounded`).

**Observações específicas encontradas no código:**
- `src/pages/Seguranca.jsx` exporta um componente default mas o nome interno é `Ulife` — isso pode confundir e é um ponto a corrigir se for refatorar.
- Ambas páginas (`Ulife.jsx` e `Seguranca.jsx`) têm markup muito similar; para mudanças globais prefira extrair componentes compartilhados.

**Quando for modificar/expandir:**
- Adicionar nova página: criar `src/pages/NovaPagina.jsx`, adicionar rota em `src/Routes.js` e criar estilos em `src/styles` se necessário.
- Ao alterar dependências, atualize `package.json` e documente comandos adicionais no `README.md`.

**O que o agente NÃO deve assumir:**
- Não há backend neste repositório — não implementar integrações servidoras a menos que o usuário peça ou adicione código de API.
- Não há testes automatizados fornecidos; não remover ou substituir dependências de teste sem autorização.

Se algo estiver ambíguo (por exemplo: nome do componente/export padrão em `Seguranca.jsx`), peça confirmação ao mantenedor antes de refatorar código que afete a API pública dos componentes.

---

Se quiser, faço uma versão mais direcionada para tarefas específicas (adicionar rota, refatorar formulário, adicionar testes). Deseja que eu refatore o nome do componente em `Seguranca.jsx` ou crie testes de smoke para a rota `/`?
