![picture alt](images/protractor-pequeno.png "Protractor - end to end testing for AngularJS")
# QA-4YouSee
Automação para vaga de QA na 4YouSee

## Como executar os testes

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

## Observações

### Relatório de resultado

* O relatório do resultado será gerado no diretório 'report/'. Os relatórios não são deletados para que possua um histórico de execução.

### Execução em múltiplos navegadores

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

### Headless

* Também é possível executar o Google Chrome em modo [headless](https://developers.google.com/web/updates/2017/04/headless-chrome), ou seja "escondido", sem que abra a interface gráfica, muito útil para servidores de integração contínua, que não possuem um UI Shell visível.
  Caso queira que isso ocorra, faça os seguintes passos:
 
**1** - Delete as alterações que fez referente aos 2 passos anteriores, voltando o arquivo *conf* para a sua forma original (*CTRL + Z* resolve).

**2** - Altere a seguinte linha:
```javascript
  {'browserName': 'chrome'}
```

para
```javascript
  {'browserName': 'chrome', 'chromeOptions': { 'args': ['headless']}}
```

 Nesse ponto, execute os testes com o comando *Protractor* e verifique que os resultados aparecem no CMD, porém sem abrir o Google Chrome. Bem como o relatório final também é gerado, tirando print como se não estivesse em modo *headless*.