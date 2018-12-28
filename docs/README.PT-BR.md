# Protractor Style Guide

[![library: protractor-helper](https://img.shields.io/badge/library-protractor--helper-blue.svg)](https://www.npmjs.com/package/protractor-helper)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://www.npmjs.com/package/prettier)

Guia de estilo de automação utilizando o Protractor e o [Protractor-helper](https://www.npmjs.com/package/protractor-helper)

[[English]](../README.md)

## Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

## Instalando as dependências e executando os testes

Todos os comandos abaixo são feitos no _prompt de comando_.

**1** - Faça um clone do repositório e acesse o diretório criado pelo clone:

```sh
git clone https://github.com/PauloGoncalvesBH/protractor-style-guide.git && cd protractor-style-guide
```

**2** - Instale as dependências do projeto:

```sh
npm install --production
```

**3** - E por fim, digite o seguinte comando para rodar os testes:

```sh
npm test
```

## Resultado dos testes

Há dois modos de verificar o resultado dos testes:

1. Através do report HTML, digitando o seguinte comando:

```sh
npm run report
```

2. Pelo prompt de comando, aonde você verá um resultado parecido com esse ao fim da execução dos testes:

```sh
> protractor-style-guide@1.0.0 test c:\protractor-style-guide
> protractor

[01:40:30] I/launcher - Running 1 instances of WebDriver
[01:40:30] I/local - Starting selenium standalone server...
[01:40:31] I/local - Selenium standalone server started at http://192.168.0.3:49223/wd/hub
Jasmine started

  1 'Sign up to win 1 million' form
    √ Fill 'First name' field with 21 characters (2 secs)
    √ Submit without fill field (0.499 sec)
    √ Fill 'First name' field with 2 characters (0.434 sec)
    √ Submit filling all fields (0.725 sec)
    √ Submit filling only 'Message' field (0.559 sec)

Executed 5 of 5 specs SUCCESS in 4 secs.
Randomized with seed 33052.
[01:40:38] I/local - Shutting down selenium standalone server.
[01:40:38] I/launcher - 0 instance(s) of WebDriver still running
[01:40:38] I/launcher - chrome #01 passed

> protractor-style-guide@1.0.0 posttest c:\protractor-style-guide
> allure generate allure-results --clean -o allure-report || true

Report successfully generated to allure-report
```
