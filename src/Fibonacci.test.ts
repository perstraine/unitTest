import Fibonacci from "./Fibonacci";

describe("Fibonacci Tests", () => {
	it("when 9 return 21", () => {
		//Arrange
		const input = 8;
		const expected = 21;

		//Act
		const actual: number = Fibonacci(input);

		//Assert
		expect(actual).toBe(expected);
	});
});

describe("Fibonacci Tests", () => {
	it("when 10 return 34", () => {
		//Arrange
		const input = 10;
		const expected = 34;

		//Act
		const actual: number = Fibonacci(input);

		//Assert
		expect(actual).toBe(expected);
	});
});
