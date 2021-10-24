function nums(sequence, bomb) {
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === bomb[0]) {
            sequence.splice(i - bomb[1] > 0 ? i - bomb[1] : 0, bomb[1] * 2 + 1)
            i = 0
        }
    }

    console.log(sequence.reduce((a, v) => a + v, 0))
}
