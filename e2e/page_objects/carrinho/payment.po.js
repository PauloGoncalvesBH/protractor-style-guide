const helper = require('protractor-helper');

const bttnPayByBankWire = $('.payment_module .bankwire');
const bttnConfirmMyOrder = $('#cart_navigation [type="submit"]');
const msgOrderIsComplete = element(by.cssContainingText('.dark', 'Your order on My Store is complete.'));

const confirmarPedido = () => {
  helper.click(bttnConfirmMyOrder);
};

const pagarViaTransferenciaBancaria = () => {
  helper.click(bttnPayByBankWire);
};

module.exports = {
  confirmarPedido,
  msgOrderIsComplete,
  pagarViaTransferenciaBancaria
};
