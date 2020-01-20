const helper = require('protractor-helper');

const bttnAbaBestSellers = $('[href="#blockbestsellers"]');
const secaoBestSellers = $$('#blockbestsellers .right-block');
const secaoPopular = $$('#homefeatured .right-block');
const bttnContinueShopping = $('[title="Continue shopping"]');

const acessarAbaBestSellers = () => {
  helper.click(bttnAbaBestSellers);
}

const acessar = () => {
  browser.get('');
};

const adicionarTodosOsProdutosBestSellersNoCarrinho = () => {
  acessarAbaBestSellers();
  secaoBestSellers.each(bttnAddToCart => {
    helper.hoverAndClick(bttnAddToCart);
    helper.click(bttnContinueShopping);
    helper.waitForElementNotToBeVisible(bttnContinueShopping);
  });
};

const adicionarTodosOsProdutosPopularNoCarrinho = () => {
  secaoPopular.each(bttnAddToCart => {
    helper.hoverAndClick(bttnAddToCart);
    helper.click(bttnContinueShopping);
    helper.waitForElementNotToBeVisible(bttnContinueShopping);
  });
};

module.exports = {
  acessar,
  adicionarTodosOsProdutosBestSellersNoCarrinho,
  adicionarTodosOsProdutosPopularNoCarrinho
};
