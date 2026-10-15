# ia-chatgpt

Laboratório didático estático para demonstrar conceitos de IA generativa, prompts, Python e estrutura de mensagens de Chat Completions.

> **Importante:** esta aplicação está em desenvolvimento. As respostas são roteirizadas e simuladas. A aplicação não chama provedores de IA e não executa Python.

## Estado atual

O primeiro incremento entrega a estrutura inicial, identidade visual inspirada no SENAI-SP, seleção dos cinco cenários, navegação básica por etapas, chat simulado, controles de acessibilidade e testes de integridade dos dados.

Ainda não estão concluídos todos os recursos previstos na especificação, como o editor interativo de exercícios, a validação detalhada do JSON de Chat Completions e a publicação automática do GitHub Pages.

## Executar localmente

Requer Node.js 20 ou superior para executar os testes. Para abrir a aplicação estática, use um servidor HTTP local e acesse index.html. Não abra diretamente por file://, pois o projeto usa módulos JavaScript ES.

## Testes

Execute: npm run check

O comando verifica a sintaxe dos módulos JavaScript e executa os testes com o test runner nativo do Node.js.

## Estrutura

- index.html: estrutura semântica da aplicação.
- css/: estilos gerais e modo de apresentação.
- js/: inicialização da interface e controles de acessibilidade.
- data/scenarios.js: conteúdo inicial dos cenários roteirizados.
- tests/: testes automatizados.
- SPEC.md: especificação funcional e técnica.
- AGENTS.md: instruções para agentes de IA.
- .github/workflows/ci.yml: validação automatizada.

## Segurança e privacidade

Não há chaves de API, backend, execução de código Python ou envio de mensagens para serviços externos. As mensagens digitadas ficam em memória durante a sessão atual. Não digite dados pessoais ou informações sensíveis.

## Próximos incrementos

1. Expandir os roteiros e testar a navegação e a preservação de estado por cenário.
2. Criar o editor simulado de exercícios com comparação exata e critérios didáticos.
3. Implementar o simulador de Chat Completions com visualização e validação de JSON.
4. Completar controles do instrutor, respostas de referência e experiências visuais de prompts.
5. Ampliar os testes e configurar a publicação GitHub Pages após validação.
