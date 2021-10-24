function train(input) {
  let arr = input.shift().split(' ').map(Number); //or map((x)=> Numbrer(x));
  let maxCapacity = Number(input.shift());

  for (let i = 0; i < input.length; i++) {
    let [command, passengers] = input[i].split(' ');
    passengers = Number(passengers);

    if (command === "Add") {
      arr.push(passengers);
    } else {
      passengers = Number(command)
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] + passengers <= maxCapacity) {
          arr[j] += passengers;
          break;
        }
      }
    }
  }
  console.log(arr.join(' '));
}
