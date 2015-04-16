define(['angular'], [function() {
	this.logFormatter = function(text) {
		return text + " " + text;
	};

	this.externalLogger = function(text) {

	};

	this.log = function(text) {
		this.externalLogger(this.logFormatter(text));
	};
}]);