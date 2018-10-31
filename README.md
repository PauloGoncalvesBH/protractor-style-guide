![picture alt](https://raw.githubusercontent.com/PauloGoncalvesBH/protractor-exemplo/a4417ae184a0d87587fbc0209634ef19affec7f4/images/protractor-pequeno.png)

# Protractor exemplo

 Projeto exemplo de automação utilizando o Protractor.

## Pré-requisito

- [Node.js](https://nodejs.org/en/download/).

- Adicionar as seguintes variáveis de ambiente do usuário:
  - Variável `USUARIO` com o valor _avaliacao_
  - Variável `SENHA` com o valor _4yousee_

## Passos para executar os testes

**1** - Faça um clone do repositório.

**2** - Abra o _Prompt de Comando_, vá até o diretório _protractor-exemplo_ e digite o seguinte comando para instalar as dependências:
```sh
  npm install
```
  
**3** - Para rodar os testes digite o comando:
```sh
  npm test
```

 **Os testes serão executados em modo [headless](https://developers.google.com/web/updates/2017/04/headless-chrome), ou seja, sem a interface gráfica.**

## Resultado dos testes

- É gerado um report HTML dentro do diretório _report/_.

- Você verá um resultado parecido com esse no _Prompt de Comando_:

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