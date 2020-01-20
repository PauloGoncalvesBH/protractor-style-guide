const faker = require('faker/locale/pt_BR');
const helper = require('protractor-helper');

const carrinho = require('../page_objects/carrinho');
const homepage = require('../page_objects/homepage.po.js');

describe('Realizar fluxo completo', () => {
  //Arrange
  beforeEach(() => homepage.acessar());

  it('Comprar todos os produtos Best Sellers', () => {
    const dadosDaConta = {
      email: faker.internet.email(),
      primeiroNome: faker.name.firstName(),
      ultimoNome: faker.name.lastName(),
      password: faker.internet.password(),
      endereco: faker.address.streetAddress(),
      cidade: faker.address.city(),
      numeroDoEstado: faker.random.number({ min: 1, max: 50, precision: 1 }),
      codigoPostal: faker.random.number({ min: 11111, max: 99999, precision: 1 }),
      telefoneCelular: faker.phone.phoneNumber()
    };

    //Act
    homepage.adicionarTodosOsProdutosBestSellersNoCarrinho();
    carrinho.summary.acessar();
    carrinho.summary.procederParaCheckout();
    carrinho.signIn.criarContaPreenchendoCamposObrigatorios(dadosDaConta);
    carrinho.address.procederParaCheckout();
    carrinho.shipping.aceitarTermosDeServico();
    carrinho.shipping.procederParaCheckout();
    carrinho.payment.pagarViaTransferenciaBancaria();
    carrinho.payment.confirmarPedido();

    //Assert
    helper.waitForElementVisibility(carrinho.payment.msgOrderIsComplete);
  });

  xit('Comprar todos os produtos Popular', () => {
    const dadosDaConta = {
      email: faker.internet.email(),
      primeiroNome: faker.name.firstName(),
      ultimoNome: faker.name.lastName(),
      password: faker.internet.password(),
      endereco: faker.address.streetAddress(),
      cidade: faker.address.city(),
      numeroDoEstado: faker.random.number({ min: 1, max: 50, precision: 1 }),
      codigoPostal: faker.random.number({ min: 11111, max: 99999, precision: 1 }),
      telefoneCelular: faker.phone.phoneNumber()
    };

    //Act
    homepage.adicionarTodosOsProdutosPopularNoCarrinho();
    carrinho.summary.acessar();
    carrinho.summary.procederParaCheckout();
    carrinho.signIn.criarContaPreenchendoCamposObrigatorios(dadosDaConta);
    carrinho.address.procederParaCheckout();
    carrinho.shipping.aceitarTermosDeServico();
    carrinho.shipping.procederParaCheckout();
    carrinho.payment.pagarViaTransferenciaBancaria();
    carrinho.payment.confirmarPedido();

    //Assert
    helper.waitForElementVisibility(carrinho.payment.msgOrderIsComplete);
  }).pend(
    'Esse caso de testes está sendo ignorado por ser apenas exemplo do reuso dos métodos com a seção "Popular". Está totalmente funcional'
  );
});
