const helper = require('protractor-helper');

const bttnProceedToCheckout = $('[name="processAddress"]');

const procederParaCheckout = () => {
  helper.click(bttnProceedToCheckout);
};

module.exports = {
  procederParaCheckout
};
