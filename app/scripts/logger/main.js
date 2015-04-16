define(['angular', './loggerService'], function(angular, loggerService) {
	'use strict';

	return angular.module('tdd-demo.logger', [])
		.service('loggerService', loggerService);
});