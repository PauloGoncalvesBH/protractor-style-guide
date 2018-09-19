![picture alt](images/protractor-pequeno.png "Protractor - end to end testing for AngularJS")
# QA-4YouSee
Automação para vaga de QA na 4YouSee

### Como executar os testes

**1** - Instale o Node.js: https://nodejs.org/en/download/

**2** - Faça um clone do repositório.

**3** - Abra o CMD até estar dentro do diretório 'QA-4YouSee' e digite o seguinte comando para atualizar as dependências:
```
  npm install
```
  
**4** - Para rodar o teste digite o comando:
```
  protractor
```

### Observações

* O relatório do resultado será gerado no diretório 'report/'. Os relatórios não são deletados para que possua um histórico de execução.

* Os testes serão executados no Google Chrome. Para que os testes rodem no Google Chrome e também no Firefox, vá até o arquivo [protractor.conf.js](protractor.conf.js), descomente a seguinte linha (linha 13) e salve:
```javascript
  // ,{'browserName': 'firefox'}
```

* Caso deseje ir além do passo acima, e queira que os testes nos 2 navegadores rodem simultaneamente, e não 1 após o outro. Altere o seguinte trecho de
 ```javascript
  maxSessions: 1,
 ```

 para:
 ```javascript
  maxSessions: 2,
 ```
