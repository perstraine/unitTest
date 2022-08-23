const Fibonacci = (input: number): number => {
    let first = 0;
    let second = 1;
    let temp = 0;
    if (input == 1) {
        return 0;
    } else if (input == 2) {
        return 1;
    } else {
        for (let index = 0; index < input -2; index++) {
            temp = first + second;
            first = second;
            second = temp;
        }
        return temp
    }
}

export default Fibonacci