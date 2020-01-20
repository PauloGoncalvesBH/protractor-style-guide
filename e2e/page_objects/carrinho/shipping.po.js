const helper = require('protractor-helper');

const bttnProceedToCheckout = $('[name="processCarrier"]');
const chkbxTermsOfService = $('.checkbox #uniform-cgv');

const aceitarTermosDeServico = () => {
  helper.click(chkbxTermsOfService);
};

const procederParaCheckout = () => {
  helper.click(bttnProceedToCheckout);
};

module.exports = {
  aceitarTermosDeServico,
  procederParaCheckout
};
