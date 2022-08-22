import Fibonacci from './Fibonacci';

describe('Fibonacci Tests', () => { 
    it("when 8 return 21", () => {
        //Arrange
        const input = 8;
        const expected = 21;

        //Act
        const actual: number = Fibonacci(input);

        //Assert
        expect(actual).toBe(expected);
    })
})
