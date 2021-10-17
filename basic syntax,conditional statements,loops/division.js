function division(n) {
    return n % 10 === 0 ? `The number is divisible by 10`
        : n % 7 === 0 ? `The number is divisible by 7`
            : n % 6 === 0 ? `The number is divisible by 6`
                : n % 3 === 0 ? `The number is divisible by 3`
                    : n % 2 === 0 ? `The number is divisible by 2`
                        : `Not divisible`
}
division(30)
division(15)
division(12)
division(1643)
