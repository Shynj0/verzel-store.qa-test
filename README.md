# Teste Técnico QA - Verzel Store

Repositório com a resolução do desafio técnico para a vaga de QA Júnior da Verzel Store. O projeto contempla automação de testes E2E e reporte de bugs manuais.

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Playwright** (com TypeScript)

## 📋 Cenários Automatizados

Os testes focam na regra de negócio de cupons de desconto e validação de cálculos no carrinho:

1. Aplicação de cupom válido (`BEMVINDO10`) com cálculo de frete e desconto.
2. Tentativa de aplicação de cupom inválido (`FALSO10`) com validação de erro e proteção do valor total.
3. Tentativa de aplicação de cupom expirado (`VERAO2026`) com validação de erro e proteção do valor total.

## 🚀 Como executar o projeto

**1. Instalar as dependências**

```bash
npm install
```

**2. Instalar os navegadores do Playwright**

```bash
npx playwright install
```

**3. Executar os testes em modo Headless (background)**

```bash
npx playwright test
```

**4. Visualizar o relatório de testes em HTML**

```bash
npx playwright show-report
```

## 📄 Documentação Auxiliar

Consulte o arquivo [testes_manuais.md](./tests/testes_manuais.md) para verificar o reporte de bugs encontrados durante a fase de testes exploratórios.