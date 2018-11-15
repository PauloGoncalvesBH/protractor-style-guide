# Protractor exemplo

![picture alt](https://raw.githubusercontent.com/PauloGoncalvesBH/protractor-exemplo/a4417ae184a0d87587fbc0209634ef19affec7f4/images/protractor-pequeno.png)

[![Dependabot badge](https://camo.githubusercontent.com/1fe7004c016a5ab641008b9579409c784eaa1725/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446570656e6461626f742d656e61626c65642d626c75652e737667)](https://dependabot.com/)

 Projeto exemplo de automação utilizando o Protractor.

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

> O comando `npm test` realiza as seguintes ações:
>
>1. Atualiza os drivers dos navegadores e do Selenium.
>2. Exclui o diretório `allure-report/` caso exista.
>3. Roda os testes apontados no arquivo `protractor.conf.js`.
>4. Gera um XML de resultado no diretório `allure-results/`.
>5. Gera um report HTML no diretório `allure-report/` com base no XML.

## Resultado dos testes

Há dois modos de verificar o resultado dos testes:

1. Abrindo o report HTML gerado pelo plugin da [Allure](https://github.com/allure-framework/allure-jasmine), digitando o seguinte comando:

```sh
npm run report
```

2. Pelo prompt de comando, aonde você verá um resultado parecido com esse ao fim da execução dos testes:

<details><p><summary>Abra para ver exemplo de resultado no prompt de comando</summary>

```sh
Started
Jasmine started
.
  Testes de Cadastro de Agência e Cliente
    √ Validar que é impedido de cadastrar um cliente ao deixar de preencher todos os campos obrigatório
.    √ Validar que o cadastro de um cliente utilizando apenas campos obrigatórios é realizado com sucesso
.    √ Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório 'Razão Social'
.    √ Validar que é impedido de cadastrar um cliente ao deixar de preencher o campo obrigatório 'Nome Fantasia'




4 specs, 0 failures
Finished in 35.686 seconds

Randomized with seed
Executed 4 of 4 specs SUCCESS in 36 secs.
Randomized with seed .

[15:34:18] I/local - Shutting down selenium standalone server.
[15:34:18] I/launcher - 0 instance(s) of WebDriver still running
[15:34:18] I/launcher - chrome #01 passed
```

</p> </details>

## Principais dependências

- [Allure Test Reporter](https://www.npmjs.com/package/jasmine-allure-reporter)
- [Protractor](https://www.npmjs.com/package/protractor)
- [Protractor-Helper](https://www.npmjs.com/package/protractor-helper)