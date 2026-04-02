# Teste Técnico QA - Watch Brasil

## Visão geral
Projeto de automação de testes focado no fluxo de busca de conteúdo em contexto de streaming, utilizando Playwright com JavaScript.

A ideia foi validar um fluxo E2E combinando API + UI, trazendo mais confiabilidade e reduzindo flakiness.

---

## Como executar

```bash
npm install
npx playwright install
npx playwright test
```
Após a execução, o relatório pode ser visualizado com:
```bash
npx playwright show-report evidences/report
```
---

## Estratégia de teste

Optei por validar o fluxo de busca combinando API + UI.
Priorizei poucos cenários com maior valor de validação, focando em confiabilidade ao invés de volume.

A API garante que o dado esperado existe e está correto.  
A UI valida se esse dado está sendo exibido corretamente para o usuário.

Evitei validações baseadas em texto da página, pois podem variar com idioma ou mudanças visuais. Em vez disso, validei comportamento (presença/ausência de resultados), tornando os testes mais estáveis.

---

## Cenário negativo

Implementei um teste com busca inválida para validar o comportamento da aplicação quando não há resultados.

A validação foi feita verificando que nenhum resultado é exibido na tela, ao invés de depender de mensagens específicas.

---

## Observações

1. Durante a automação, foi necessário ajustar seletores e evitar asserts frágeis (como textos genéricos), garantindo maior estabilidade dos testes.  
2. Caso a porta do relatório esteja em uso:

```bash
npx playwright show-report evidences/report --port=9324
```

---

## Próximos passos

- Adicionar testes para cenários de paginação e filtros
- Validar comportamento de erro da API
- Integrar execução em pipeline CI