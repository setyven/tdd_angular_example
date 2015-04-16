define(['angular', 'angularRoute', './factorialService'], function(angular, angularRoute, factorialService){
	'use strict';

	return angular.module('tdd-demo.calculator', ['ngRoute'])
		.service('factorialService', factorialService);

});
