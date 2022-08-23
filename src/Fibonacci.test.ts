import Fibonacci from "./Fibonacci";

<<<<<<< HEAD
describe("Fibonacci Tests", () => {
	it("when 9 return 21", () => {
		//Arrange
		const input = 8;
		const expected = 21;
=======
describe('Fibonacci Tests', () => { 
    it("when 9 return 21", () => {
        //Arrange
        const input = 9;
        const expected = 21;
>>>>>>> e1071f448041be5e7a95e97affaf54e30741629e

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
