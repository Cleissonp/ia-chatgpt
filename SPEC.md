# SPEC.md — ia-chatgpt

> Especificação funcional e técnica da primeira versão. Este projeto é uma demonstração didática estática: **não é um cliente de IA real** e não chama provedores externos.

## 1. Visão do produto

Aplicação web educacional para instrutores demonstrarem conceitos de IA generativa, prompts, programação Python e a estrutura de mensagens da API Chat Completions. O conteúdo é roteirizado e as respostas são simuladas de forma transparente.

**Público principal:** instrutores que conduzem demonstrações em sala de aula.

**Objetivo da v1:** entregar uma aplicação funcional, acessível, documentada e publicável no GitHub Pages, com todos os cenários abaixo e testes automatizados.

## 2. Princípios obrigatórios

1. Didático antes de sofisticado: linguagem clara, instruções curtas e exemplos concretos.
2. Transparência: identificar respostas como simuladas; nunca sugerir que foram geradas por um modelo real.
3. Segurança: nenhuma chave, token, senha ou segredo em HTML, CSS, JavaScript, dados, documentação ou histórico Git.
4. Estático por padrão: a aplicação deve funcionar sem backend, banco de dados, build obrigatório ou chamada de rede para provedores.
5. Modularidade: separar estrutura, estilos, lógica, roteiros e testes.
6. Navegação controlada pelo instrutor: permitir acessar qualquer etapa, voltar e reiniciar.
7. Preservação temporária: manter estado somente durante a sessão da aba, sem persistência permanente.
8. Acessibilidade: HTML semântico, navegação por teclado, foco visível, contraste adequado, rótulos acessíveis e ajuste de fonte.

## 3. Escopo funcional

### 3.1 Tela inicial e cenários

A tela inicial apresenta os cenários disponíveis, cada um com título, objetivo e breve descrição. Selecionar um cenário abre sua experiência de chat e painel didático.

Cenários obrigatórios:
- **Python passo a passo:** analisar e explicar exemplos de código linha por linha.
- **IA generativa:** conceitos básicos, prompts, tokens e geração de respostas; incluir experimentos comparativos com prompts.
- **Depuração de código:** código com falha, pistas graduais, tentativa de correção e solução revelada sob demanda.
- **Chat Completions:** editar mensagens `system`, `user` e `assistant`, montar/visualizar JSON e receber uma resposta simulada.
- **Conversa livre simulada:** oferecer perguntas sugeridas e respostas roteirizadas associadas a intenções/cenários conhecidos. Informar claramente que não há compreensão geral nem modelo real.

O menu lateral permite trocar de cenário a qualquer momento.

### 3.2 Etapas e painel didático

Cada cenário contém:
- objetivo de aprendizagem;
- instruções para a etapa atual;
- lista de etapas navegável diretamente;
- ações de avançar, voltar e reiniciar;
- perguntas sugeridas e caminhos previstos;
- resposta de referência escondida por padrão, revelada por botão;
- feedback explicativo para exercícios, quando aplicável.

A navegação direta entre etapas não deve quebrar o estado do cenário. Ao trocar de cenário e retornar, restaurar a etapa e a conversa daquela sessão.

### 3.3 Chat e mensagens

- Histórico contínuo de mensagens com rolagem automática para a mensagem mais recente.
- Indicador de processamento e digitação simulada antes de exibir respostas.
- Respostas roteirizadas associadas ao cenário e à etapa.
- Controles para reiniciar cenário e limpar a conversa quando apropriado.
- Mensagens do sistema/roteiro devem ser visualmente distintas das mensagens do usuário.
- Não simular nem exibir raciocínio interno privado. Explicações devem ser resumos didáticos de conceitos e decisões predefinidas.

A animação de digitação deve respeitar a preferência de redução de movimento e não impedir a navegação por teclado ou leitor de tela. A resposta deve ser anunciada de maneira acessível, sem anunciar cada caractere.

### 3.4 Exercícios de programação

O editor é **simulado**. Ele não executa Python nem código arbitrário.

- Permitir editar o texto de um exercício.
- Oferecer verificação com comparação exata quando adequada.
- Para exercícios definidos por critérios, verificar elementos específicos com lógica local explícita.
- Exibir acertos, erros comuns e sugestões de melhoria.
- Mostrar a resposta de referência apenas sob demanda.
- Não usar `eval`, `Function`, execução de shell, WebAssembly Python ou serviço remoto para executar o código do aluno na v1.

### 3.5 Simulador de Chat Completions

- Permitir adicionar/editar mensagens com os papéis `system`, `user` e `assistant`.
- Gerar uma representação JSON local da requisição simulada.
- Validar estrutura básica e apresentar erros compreensíveis.
- Mostrar uma resposta simulada e explicar os campos principais.
- Incluir aviso explícito: “Demonstração local — nenhuma requisição foi enviada a uma API real”.
- Não pedir nem aceitar chaves de API.

### 3.6 Experimentos de IA generativa

- Exibir explicações visuais simples sobre prompt, contexto, tokens e resposta.
- Permitir escolher exemplos de prompts e comparar saídas roteirizadas.
- Explicar que os resultados são preparados previamente e não representam comportamento real ou probabilístico de um modelo em execução.

### 3.7 Apresentação e acessibilidade

- Alternar entre interface normal e modo apresentação.
- No modo apresentação, ampliar área didática e conteúdo central e reduzir distrações sem ocultar navegação essencial.
- Controle de tamanho da fonte.
- Contraste adequado e foco visível.
- Navegação integral por teclado e uso correto de rótulos/nomes acessíveis.
- Respeitar `prefers-reduced-motion`.
- Layout prioritário para desktop/projetor, com adaptação básica para dispositivos móveis.
- Não depender somente da cor para comunicar acertos/erros.

### 3.8 Estado durante a sessão

- Usar estado em memória e, se necessário, `sessionStorage` para preservar conversas e etapas durante a sessão da aba.
- Separar estado por cenário.
- Não usar `localStorage`, cookies de rastreamento ou banco remoto para histórico.
- Ao fechar a sessão/aba, não prometer persistência.
- Se `sessionStorage` falhar ou estiver indisponível, continuar com estado em memória sem bloquear o uso.

## 4. Identidade visual

- Paleta inspirada na identidade SENAI-SP: vermelho, preto, branco e tons neutros para superfícies.
- Visual limpo, legível e consistente, apropriado para projeção.
- Não copiar logotipos oficiais sem arquivo/uso autorizado; manter a identidade cromática e tipográfica sem alegar afiliação oficial.
- Estados de foco, hover, desabilitado, erro, sucesso e carregamento precisam ser discerníveis.

## 5. Arquitetura sugerida

A arquitetura final pode evoluir, mas deve manter separação clara:

```text
/
├── index.html
├── README.md
├── SPEC.md
├── AGENTS.md
├── assets/
│   └── icons/                 # apenas recursos locais necessários
├── css/
│   ├── styles.css
│   ├── components.css
│   └── presentation.css
├── js/
│   ├── app.js                 # inicialização e coordenação
│   ├── state.js               # estado da sessão por cenário
│   ├── navigation.js          # cenários e etapas
│   ├── chat.js                # renderização/fluxo de mensagens
│   ├── simulator.js           # respostas roteirizadas
│   ├── exercises.js           # validação local dos exercícios
│   ├── completions.js         # simulador JSON de Chat Completions
│   ├── accessibility.js       # controles acessíveis
│   └── utils.js
├── data/
│   ├── scenarios.js            # ou JSON, conforme estratégia escolhida
│   ├── python.js
│   ├── generative-ai.js
│   ├── debugging.js
│   ├── chat-completions.js
│   └── free-simulation.js
├── tests/
│   ├── unit/
│   └── integration/
└── .github/
    └── workflows/
        ├── ci.yml
        └── pages.yml
```

Use módulos ES nativos se a estratégia de hospedagem/testes escolhida os suportar. O site publicado deve funcionar em um subcaminho do GitHub Pages; evitar caminhos absolutos que presumam domínio raiz. Dependências externas não são necessárias para a v1. Se alguma for proposta, justificar valor, licença, disponibilidade e comportamento offline.

## 6. Qualidade e testes

O pipeline deve falhar quando uma validação obrigatória falhar. Testar pelo menos:

1. Integridade dos arquivos essenciais e links locais.
2. Sintaxe dos arquivos JavaScript.
3. Todos os cinco cenários carregam e têm etapas válidas.
4. Navegação direta, avançar, voltar e reiniciar.
5. Estado de cada cenário é preservado ao alternar cenários durante a sessão.
6. Estado não depende de armazenamento permanente.
7. Respostas esperadas permanecem ocultas até a ação do usuário.
8. Exercícios: comparação exata, critérios e feedback.
9. Simulador de Chat Completions: papéis válidos, JSON e mensagens de erro.
10. Modo apresentação, ajuste de fonte e navegação por teclado em verificações automatizadas quando possível.
11. A aplicação não faz chamadas de rede a provedores de IA e não contém padrões conhecidos de segredos.
12. Publicação do GitHub Pages somente após validação bem-sucedida.

Usar ferramentas de teste leves e reproduzíveis. Se um teste exigir browser headless, documentar instalação e versão no CI. Não afirmar cobertura total se não houver relatório de cobertura.

## 7. GitHub Pages e CI/CD

- Publicação automática por GitHub Actions a partir de atualizações na branch `main).
- Separar validação e publicação em workflows/jobs claros.
- Usar permissões mínimas necessárias; para deploy do Pages, declarar explicitamente as permissões requeridas pelo workflow.
- Não usar segredos se não forem necessários.
- Se a configuração inicial de Pages precisar de habilitação manual nas configurações do repositório, documentar esse passo; não afirmar que o site está publicado antes de verificar uma execução bem-sucedida.
- Validar caminhos de assets para o formato `https://<usuario>.github.io/ia-chatgpt/`.

## 8. Segurança e privacidade

- Nunca incluir credenciais, tokens, cookies ou dados pessoais de alunos.
- Não adicionar formulário de API key na v1.
- Não enviar conteúdo de conversa a serviços externos.
- Não usar telemetria, analytics, fontes remotas ou scripts de terceiros sem decisão explícita e documentação.
- Tratar texto digitado pelo usuário como texto, nunca como HTML confiável.
- Ao renderizar mensagens, preferir `textContent` e APIs DOM seguras; não concatenar conteúdo do usuário em `innerHTML`.
- Não incluir código de execução dinâmica (`eval`/ `new Function`).
- Se a arquitetura mudar para IA real no futuro, exigir uma nova especificação de segurança e um backend/proxy seguro ou outra estratégia que não exponha segredos no frontend público.

## 9. Documentação obrigatória

`README.md` deve incluir visão geral, funcionalidades, limitações da simulação, uso local, testes e link de publicação quando confirmado.

Documentação de manutenção deve explicar:
- estrutura de diretórios;
- como adicionar um cenário/etapa;
- como adicionar exercício e critérios de correção;
- como alterar tema e modo de apresentação;
- como executar os testes;
- como funciona o GitHub Actions e como habilitar Pages;
- acessibilidade, segurança e limites da simulação.

## 10. Critérios de aceitação da v1

A versão é aceita quando:
- os cinco cenários estão disponíveis e funcionais;
- o usuário pode alternar cenários e manter o progresso durante a sessão;
- a navegação de etapas funciona em qualquer ordem;
- respostas de referência são reveladas sob demanda;
- editor simulado e exercícios oferecem feedback útil;
- simulador de Chat Completions apresenta mensagens e JSON localmente;
- modo de apresentação e ajuste de fonte funcionam;
- acessibilidade básica está implementada e testada;
- testes automatizados passam no CI;
- documentação está completa;
- o workflow de publicação está configurado e o status do deploy foi verificado;
- não há segredos nem chamadas reais a serviços de IA.

## 11. Fora do escopo da v1

- Chamadas reais à OpenAI ou a outros provedores.
- Backend, autenticação, banco de dados ou contas de alunos.
- Execução real de Python no navegador.
- Histórico persistente entre sessões.
- Telemetria ou analytics.
- Inferir intenção livremente com um LLM: a conversa livre é apenas uma simulação roteirizada.

## 12. Ordem recomendada de implementação

1. Estrutura base, tema e acessibilidade.
2. Dados dos cenários e navegação de etapas.
3. Chat, indicador de digitação e estado de sessão por cenário.
4. Roteiros Python e IA generativa.
5. Depuração guiada e exercícios com feedback.
6. Simulador de Chat Completions.
7. Modo apresentação e refinamento responsivo.
8. Testes automatizados, documentação e revisão de segurança.
9. CI e publicação GitHub Pages; verificar execução real antes de declarar concluído.
