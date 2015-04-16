define(['app', 'angular.mocks'], function() {
	beforeEach(module('tdd-demo.logger'));

	describe('Logger service', function() {
		beforeEach(inject(function(_loggerService_) {
			this.loggerService = _loggerService_;
		}));

		it('should be defined', function() {
			expect(this.loggerService).toBeDefined();
		});

		describe('log functionality', function() {
			it('should be defined', function() {
				expect(this.loggerService.log).toBeDefined();
			});

			it('should call log formatter', function() {
				spyOn(this.loggerService, 'logFormatter');

				this.loggerService.log('something');
				expect(this.loggerService.logFormatter).toHaveBeenCalledWith('something');
			});

			it('should call external logger and pass log formatter result', function() {
				spyOn(this.loggerService, 'logFormatter').and.callFake(function(){
					return 'fake';
				});

				spyOn(this.loggerService, 'externalLogger');

				this.loggerService.log('text');
				expect(this.loggerService.externalLogger).toHaveBeenCalledWith('fake');
			});
		});

		describe('log formatter', function() {
			it('should be defined', function() {
				expect(this.loggerService.logFormatter).toBeDefined();
			});
			it('should return text and space and text', function() {
				var result = this.loggerService.logFormatter('abc');
				expect(result).toEqual('abc abc');
			});
		});

		describe('external logger', function() {
			it('should be defined', function() {
				expect(this.loggerService.externalLogger).toBeDefined();
			});
		});
	});
});