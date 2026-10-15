# ia-chatgpt

Laboratório didático estático para demonstrar conceitos de IA generativa, prompts, Python e estrutura de mensagens de Chat Completions.

> **Importante:** as respostas são roteirizadas e simuladas. A aplicação não chama provedores de IA e não executa Python.

## Publicação no GitHub Pages

O workflow `.github/workflows/pages.yml` valida o projeto, prepara somente os arquivos estáticos necessários e publica o site com GitHub Actions. A publicação acontece em pushes para `main` e por execução manual; pull requests executam validação, mas não publicam.

**Configuração inicial necessária no GitHub:**

1. Abra **Settings → Pages** neste repositório.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Abra a aba **Actions** e acompanhe o workflow **Deploy GitHub Pages**.
4. Espere os jobs de validação e publicação terminarem com sucesso.
5. O endereço esperado do projeto é [https://cleissonp.github.io/ia-chatgpt/](https://cleissonp.github.io/ia-chatgpt/). Considere-o publicado somente depois de o workflow concluir com sucesso e o endereço responder.

O deploy usa as permissões mínimas necessárias para publicar Pages e não requer secrets. O conteúdo do site é estático; o workflow prepara o diretório `_site` com `index.html`, `css/`, `js/`, `data/` e `.nojekyll`.

## Estado atual

A base visual, os cinco cenários roteirizados, navegação básica por etapas, chat simulado, controles de fonte e modo apresentação estão no repositório. Os testes verificam integridade dos cenários, referências locais e algumas regras de segurança.

Ainda há funcionalidades da especificação que precisam ser concluídas, incluindo navegação direta por etapa, respostas de referência reveladas sob demanda, exercícios com feedback e simulador editável de JSON de Chat Completions. A publicação automática só estará confirmada após a primeira execução bem-sucedida do workflow.

## Executar localmente

Requer Node.js 20 ou superior para executar os testes. Para abrir a aplicação estática, use um servidor HTTP local (por exemplo, a extensão Live Server do VS Code) e acesse `index.html`. Não abra diretamente por `file://`, pois o projeto usa módulos JavaScript ES.

## Testes

```bash
npm run check
```

O comando verifica a sintaxe dos módulos JavaScript e executa os testes com o test runner nativo do Node.js.

## Estrutura

- `index.html`: estrutura semântica da aplicação.
- `css/`: estilos gerais e modo de apresentação.
- `js/`: inicialização da interface e controles de acessibilidade.
- `data/scenarios.js`: conteúdo inicial dos cenários roteirizados.
- `tests/`: testes automatizados de dados e caminhos locais.
- `SPEC.md`: especificação funcional e técnica.
- `AGENTS.md`: instruções para agentes de IA.
- `.github/workflows/ci.yml`: validação contínua.
- `.github/workflows/pages.yml`: validação e publicação no GitHub Pages.
- `.nojekyll`: informa ao Pages que não é necessário processar o site com Jekyll.

## Segurança e privacidade

Não há chaves de API, backend, execução de código Python ou envio de mensagens para serviços externos. As mensagens digitadas ficam em memória durante a sessão atual. Não digite dados pessoais ou informações sensíveis.

## Como contribuir

1. Leia `SPEC.md` e `AGENTS.md`.
2. Faça uma mudança pequena e mantenha a arquitetura modular.
3. Adicione ou atualize testes.
4. Execute `npm run check`.
5. Abra um pull request. O CI valida a alteração; o deploy ocorre somente depois de uma atualização elegível na branch `main`.

