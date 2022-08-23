const Fibonacci = (input: number): number => {
<<<<<<< HEAD
	let first = 0;
=======
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
>>>>>>> e1071f448041be5e7a95e97affaf54e30741629e

	let second = 1;

	let temp = 0;

	if (input == 1) {
		return 0;
	} else if (input == 2) {
		return 1;
	} else {
		for (let index = 0; index < input - 2; index++) {
			temp = first + second;

			first = second;

			second = temp;
		}

		return temp;
	}
};

export default Fibonacci;
