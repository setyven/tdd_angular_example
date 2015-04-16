define(['app', 'angular.mocks'], function(){
	beforeEach(module('tdd-demo.calculator'));

	describe('Factorial service', function() {
		beforeEach(inject(function(_factorialService_, _loggerService_) {
			this.factorialService = _factorialService_;
			this.loggerService = _loggerService_;
		}));

		it('should be defined', function() {
			expect(this.factorialService).toBeDefined();
		});

		describe('factorial functionality', function() {
			it('should be defined', function() {
				expect(this.factorialService.calculate).toBeDefined();
			});
			it('should return 1 when given 0', function() {
				var result = this.factorialService.calculate(0);
				expect(result).toBe(1);
			});
			it('should return 1 when given 1', function() {
				var result = this.factorialService.calculate(1);
				expect(result).toBe(1);
			});
			it('should return 24 when given 4', function() {
				var result = this.factorialService.calculate(4);
				expect(result).toBe(24);
			});
		});

		describe('factorial and log functionality', function() {
			it('should log the result', function() {
				var marker = 0;
				spyOn(this.loggerService, 'log').and.callFake(function(){
					marker = 1;
				});

				var result = this.factorialService.calculateAndLog(10);
				expect(marker).toEqual(1);
			});

			it('should log the result', function() {
				spyOn(this.loggerService, 'log');
				spyOn(this.factorialService, 'calculate').and.callThrough();

				this.factorialService.calculate.and.stub();
				var result = this.factorialService.calculateAndLog(3);

				expect(this.loggerService.log).toHaveBeenCalledWith(undefined);
			});

			it('should log the result', function() {
				spyOn(this.loggerService, 'log');
				spyOn(this.factorialService, 'calculate').and.returnValue('abc');

				var result = this.factorialService.calculateAndLog(3);
				expect(this.loggerService.log).toHaveBeenCalledWith('abc');
			});
		});
	});
});