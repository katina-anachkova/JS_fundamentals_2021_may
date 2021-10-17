function leap(year) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 'yes' : 'no';
}

leap([1984])
leap([2003])
leap([4])

