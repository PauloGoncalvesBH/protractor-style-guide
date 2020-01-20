# Protractor - Guia de estilo

[![E2E library: protractor](https://img.shields.io/badge/e2e%20library-protractor-blue)](https://www.npmjs.com/package/protractor)

Esse projeto exemplifica como deve ser a estrutura de uma automação feita com [Protractor](https://www.npmjs.com/package/protractor) de forma com que seja organizado, limpo e de fácil manutenção.

## Instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

### Clonando o repositório

Todos os comandos abaixo são feitos no terminal

**1** - Faça um clone do repositório e acesse o diretório criado pelo clone:

```sh
git clone https://github.com/PauloGoncalvesBH/protractor-style-guide.git && cd protractor-style-guide
```

**2** - Instale as dependências do projeto:

```sh
npm ci
```

O comando [npm ci](https://docs.npmjs.com/cli/ci.html) instala as dependências do projeto de forma limpa. Uma diferença importante para o [npm install](https://docs.npmjs.com/cli/install) é que remove o diretório _node_modules_ e instala as versões listadas no  [package.json](./package.json) e [package-lock.json](./package-lock.json).

### Executando os testes

Para executar os testes no **Chrome**, execute:

```sh
npm run test:chrome
```

Para executar no **Firefox**, execute:

```sh
npm run test:firefox
```

Para executar em ambos os navegadores, execute:
```
npm test
```

No início da execução o driver do navegador a ser executado é atualizado utilizando o comando `webdriver-manager update`. Verifique a seção _scripts_ no [package.json](package.json).

## Sobre o projeto

### Dependências utilizadas
- [Protractor](https://www.npmjs.com/package/protractor): Biblioteca de automação E2E.
- [Protractor-helper](https://www.npmjs.com/package/protractor-helper): Biblioteca de ações/asserções que ajuda a tornar os testes robustos.
- [Faker](https://www.npmjs.com/package/faker): Gera dados aleatórios para serem utilizados nos testes.
- [Jasmine-spec-reporter](https://www.npmjs.com/package/jasmine-spec-reporter): Imprime resumo da execução no terminal de acordo com o configurado no arquivo de [configuração](e2e/configs/createProtractorConf.js).

As dependências estão definidas no [package.json](./package.json).

### Estrutura de diretórios

```
protractor-style-guide/
 |
 ├─ e2e/
 |   ├─ configs/
 |   ├─ page_objects/
 |   └─ spec/
 |
 ├─ .gitignore
 ├─ package.json
 └─ package-lock.json
```

- :file_folder: [e2e/](e2e): Dir com todos os arquivos da automação.
  - :file_folder: [e2e/configs/](e2e/configs): Dir com os arquivos de configuração de quais testes devem ser executados, navegadores, report, etc.
  - :file_folder: [e2e/page_objects/](e2e/page_objects): Dir com todos os métodos que interagem com o navegador e elementos mapeados. É consumido pelos arquivos em _spec/_.
  - :file_folder: [e2e/spec/](e2e/spec): Dir com todos os casos de testes, consome os _page_objects_, é executado pelo conf em _configs_ e realiza asserções.
- :page_with_curl: [.gitignore](.gitignore): Arquivo que define quais diretórios e arquivos devem ser ignorados pelo _Git_.
- :page_with_curl: [package.json](package.json): Arquivo com informações das dependências do projeto, licença, scripts, autor, etc. Para saber mais [clique aqui](https://docs.npmjs.com/files/package.json).
- :page_with_curl: [package-lock.json](package-lock.json): Arquivo gerado automaticamente quando são instaladas as dependências com `npm install`. Instalação feita com `npm ci` não o modifica. Para saber mais [clique aqui](https://docs.npmjs.com/files/package-lock.json).

---
_Qualquer apoio que precisar me procure._ :camel:

_[Licença MIT](LICENSE)_