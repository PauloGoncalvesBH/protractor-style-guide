const helper = require('protractor-helper');

const bttnProceedToCheckout = $('.cart_navigation [title="Proceed to checkout"]');

const acessar = () => {
  browser.get('?controller=order');
};

const procederParaCheckout = () => {
  helper.click(bttnProceedToCheckout);
};

module.exports = {
  acessar,
  procederParaCheckout
};
