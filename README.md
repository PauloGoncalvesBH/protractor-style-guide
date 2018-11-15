# Protractor Style Guide

![picture alt](https://raw.githubusercontent.com/PauloGoncalvesBH/protractor-exemplo/a4417ae184a0d87587fbc0209634ef19affec7f4/images/protractor-pequeno.png)

[![Dependabot badge](https://camo.githubusercontent.com/1fe7004c016a5ab641008b9579409c784eaa1725/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446570656e6461626f742d656e61626c65642d626c75652e737667)](https://dependabot.com/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

 Guia de estilo de automação utilizando o Protractor

## Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

## Instalando as dependências e executando os testes

 Os testes serão executados em modo [headless](https://developers.google.com/web/updates/2017/04/headless-chrome), ou seja, sem que o browser abra a interface gráfica.

 Todos os comandos abaixo são feitos no _prompt de comando_.

**1** - Faça um clone do repositório e acesse o diretório criado pelo clone:

```sh
git clone https://github.com/PauloGoncalvesBH/protractor-exemplo.git && cd protractor-exemplo
```

**2** - Instale as dependências do projeto:

```sh
npm install
```

**3** - E por fim, digite o seguinte comando para rodar os testes:

```sh
npm test
```

## Resultado dos testes

Há dois modos de verificar o resultado dos testes:

1. Abrindo o report HTML gerado pelo plugin da [Allure](https://github.com/allure-framework/allure-jasmine), digitando o seguinte comando:

```sh
npm run report
```

2. Pelo prompt de comando, aonde você verá um resultado parecido com esse ao fim da execução dos testes:

```sh
> protractor-style-guide@1.0.0 test c:\protractor-exemplo
> protractor

[12:11:21] I/launcher - Running 1 instances of WebDriver
[12:11:21] I/local - Starting selenium standalone server...
[12:11:23] I/local - Selenium standalone server started at http://192.168.0.3:53861/wd/hub
Jasmine started

  1 Testes de Cadastro de Agência e Cliente
    √ Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório 'Nome Fantasia' (13 secs)
    * Validar que o cadastro de um cliente utilizando apenas campos obrigatórios é realizado com sucesso
    √ Validar que é impedido de cadastrar um cliente ao deixar de preencher todos os campos obrigatório (4 secs)
    √ Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório 'Razão Social' (4 secs)

**************************************************
*                    Pending                     *
**************************************************

1) Testes de Cadastro de Agência e Cliente Validar que o cadastro de um cliente utilizando apenas campos obrigatórios é realizado com sucesso
  Necessita de criar a validação.

Executed 3 of 4 specs INCOMPLETE (1 PENDING) in 22 secs.
Randomized with seed 32107.
[12:11:48] I/local - Shutting down selenium standalone server.
[12:11:48] I/launcher - 0 instance(s) of WebDriver still running
[12:11:48] I/launcher - chrome #01 passed

> protractor-style-guide@1.0.0 posttest c:\protractor-exemplo
> allure generate allure-results --clean -o allure-report || true

Report successfully generated to allure-report
```
