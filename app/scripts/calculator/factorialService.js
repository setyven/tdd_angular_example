define(['angular'], ['loggerService', function(loggerService){
	var loggerService = loggerService;
	this.calculate = function(number) {
		var result;
		if(number===0) {
			result = 1;
		}
		else {
			var temp = 1;
			for(var i=0; i<number; i++) {
				temp = temp * (i+1);
			}
			result = temp;
		}
		return result;
	};

	this.log = function(result) {
		loggerService.log(result);
	};

	this.calculateAndLog = function(number) {
		result = this.calculate(number);
		this.log(result);
	};

}]);