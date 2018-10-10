"use strict"

const shortid = require("shortid");

class Helper {

	gerarCaracteres() {
		return shortid.generate();
	};

	gerarEmail() {
		return this.gerarCaracteres() + "@4yousee.com.br";
	};

	requiredParam(
		functionWithoutParam,
		requiredParameter = "htmlElement"
	) {
		const requiredParamError = new Error(
			`Parameter "${requiredParameter}" is missing at function "${
			functionWithoutParam.name
			}()". \nFill the required parameter.`
		);
		Error.captureStackTrace(requiredParamError, functionWithoutParam);
		throw requiredParamError;
	};

};

module.exports = new Helper();