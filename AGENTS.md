# AGENTS.md — instruções para agentes de IA

Estas instruções aplicam-se a todo o repositório `ia-chatgpt`. Leia `SPEC.md` antes de planejar ou modificar funcionalidades. Se uma solicitação contradisser esta especificação, explique o conflito e peça esclarecimento antes de alterar requisitos fundamentais.

## Missão do projeto

Construir uma aplicação didática estática, em português brasileiro, para demonstrar conceitos de IA generativa e programação. Na v1, todas as respostas são roteirizadas/simuladas; não há modelo real, backend nem chamadas externas.

## Regras de trabalho

1. **Inspecione antes de editar.** Leia os arquivos relevantes, os testes e a documentação existente. Não substitua arquivos ou decisões existentes sem entender seu propósito.
2. **Trabalhe em incrementos pequenos.** Faça uma mudança coesa de cada vez e valide-a antes de avançar.
3. **Use testes.** Para cada comportamento novo ou corrigido, crie/atualize testes e execute os comandos disponíveis. Nunca diga que os testes passaram sem executá-los.
4. **Não invente resultados.** Diferencie claramente o que foi implementado, o que foi testado e o que continua pendente, inclusive o status real do GitHub Pages.
5. **Mantenha o escopo da v1.** Não introduza provedor de IA real, backend, autenticação, banco de dados ou execução real de Python sem uma nova decisão explícita.
6. **Priorize didática.** Use português brasileiro claro, frases curtas, exemplos concretos e mensagens de erro acionáveis.
7. **Preserve a identidade visual.** Tema inspirado no SENAI-SP com vermelho, preto e branco, contraste adequado e foco na leitura em sala/projetor. Não invente uso autorizado de logotipos.
8. **Respeite a arquitetura modular.** Separe HTML, CSS, lógica, dados de cenários e testes. Evite criar um arquivo monolítico.
9. **Acessibilidade não é opcional.** Use HTML semântico, rótulos acessíveis, navegação por teclado, foco visível, contraste e suporte a redução de movimento.
10. **Não amplie o escopo silenciosamente.** Se um requisito for ambíguo ou implicar mudança arquitetural relevante, faça uma pergunta objetiva antes de implementar.

## Segurança obrigatória

- Nunca adicione API keys, tokens, senhas, cookies de sessão ou segredos ao repositório, exemplos, fixtures, logs ou documentação.
- Não crie campos para inserir chaves de API na v1.
- Não envie mensagens, código digitado ou dados de alunos para serviços externos.
- Não use `eval`, `new Function` nem execução dinâmica de código fornecido pelo usuário.
- Trate conteúdo digitado como texto não confiável. Prefira `textContent` e criação segura de nós DOM; evite interpolar conteúdo de usuário em `innerHTML`.
- Evite analytics, telemetria, scripts remotos e dependências externas sem justificativa e autorização explícita.
- Não use `localStorage` para histórico de conversa. Use estado em memória ou `sessionStorage` com fallback.
- Deixe claro na interface que respostas e animações são simuladas; não apresente conteúdo roteirizado como raciocínio interno real de um modelo.

## GitHub Pages e workflows

- O site deve funcionar no caminho de projeto `/ia-chatgpt/`; não presuma que a aplicação está hospedada na raiz do domínio.
- Mantenha workflows com permissões mínimas e versões de actions explícitas quando possível.
- Faça o CI validar arquivos, sintaxe, cenários, navegação, exercícios e estado de sessão conforme os testes implementados.
- Não declare deploy concluído até verificar um workflow bem-sucedido e o endereço publicado.
- Não adicione secrets ou permissões de escrita desnecessárias.

## Fluxo de implementação

1. Leia `SPEC.md`, `README.md` e a estrutura existente.
2. Resuma o objetivo e os critérios de aceitação da tarefa.
3. Identifique os arquivos afetados e proponha a menor mudança coesa.
4. Implemente testes antes ou junto da funcionalidade.
5. Execute testes e verificações de sintaxe disponíveis.
6. Revise segurança, acessibilidade, caminhos do GitHub Pages e consistência visual.
7. Resuma arquivos alterados, testes executados e pendências.

## Critérios para revisão de código

Antes de concluir, verifique:
- o comportamento corresponde à especificação;
- os estados vazios, erros e reinícios são tratados;
- a navegação por teclado e os leitores de tela não são prejudicados;
- não há segredos, dependências remotas desnecessárias ou execução dinâmica;
- o progresso por cenário funciona apenas durante a sessão;
- a documentação corresponde ao comportamento real;
- testes relevantes foram executados e seus resultados foram reportados honestamente.

## Preferências para agentes

- Prefira mudanças explícitas e fáceis de revisar.
- Evite abstrações prematuras e dependências pesadas.
- Não refatore arquivos não relacionados à tarefa.
- Se não puder executar um teste, diga exatamente qual teste ficou pendente e por quê.
- Em conflito entre instruções, priorize segurança, requisitos explícitos do usuário e `SPEC.md`; informe o conflito em vez de escondê-lo.
