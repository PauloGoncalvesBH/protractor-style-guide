const helper = require('protractor-helper');

const inputEmailAddres = $('#email_create');
const bttnCreateAnAccount = $('#SubmitCreate');
const inputFirstName = $('#customer_firstname');
const inputLastName = $('#customer_lastname');
const inputPassword = $('#passwd');
const inputAddress = $('#address1');
const inputCity = $('#city');
const selectState = $('.required.id_state.select.form-group .selector');
const inputZipPostCode = $('#postcode');
const inputMobilePhone = $('#phone_mobile');
const bttnRegister = $('#submitAccount');

const criarContaPreenchendoCamposObrigatorios = dadosDaConta => {
  preencherFormCreateAnAccount(dadosDaConta.email);
  preencherInformacoesPessoais(dadosDaConta);
  confirmarRegistro();
};

const preencherFormCreateAnAccount = email => {
  helper.fillFieldWithText(inputEmailAddres, email);
  helper.click(bttnCreateAnAccount);
};

const preencherInformacoesPessoais = ({
  primeiroNome,
  ultimoNome,
  password,
  endereco,
  cidade,
  numeroDoEstado,
  codigoPostal,
  telefoneCelular
}) => {
  helper.fillFieldWithText(inputFirstName, primeiroNome);
  helper.fillFieldWithText(inputLastName, ultimoNome);
  helper.fillFieldWithText(inputPassword, password);
  helper.fillFieldWithText(inputAddress, endereco);
  helper.fillFieldWithText(inputCity, cidade);
  preencherEstado(numeroDoEstado);
  helper.fillFieldWithText(inputZipPostCode, codigoPostal);
  helper.fillFieldWithText(inputMobilePhone, telefoneCelular);
};

const preencherEstado = numeroDoEstado => {
  helper.hoverAndClick(selectState);
  helper.click($(`#id_state [value="${numeroDoEstado}"]`));
}

const confirmarRegistro = () => {
  helper.click(bttnRegister);
};

module.exports = {
  confirmarRegistro,
  criarContaPreenchendoCamposObrigatorios,
  preencherFormCreateAnAccount,
  preencherInformacoesPessoais
};
