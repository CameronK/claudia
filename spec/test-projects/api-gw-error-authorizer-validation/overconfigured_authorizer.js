/*global exports*/
exports.apiConfig = function () {
	'use strict';
	return {
		version: 3,
		authorizers: { first: { lambdaName: 'ln', lambdaArn: 'bla' } },
		routes: { echo: { 'GET' : { customAuthorizer: 'first' } }}
	};
};
exports.router = function (event, context) {
	'use strict';
	context.succeed(event);
};