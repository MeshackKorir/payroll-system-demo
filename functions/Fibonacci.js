function numberHundred(num) {
  let numbers = [];
  let a=0, b=1, next=0;

  while (a <= num) {
    numbers.push(a);
    next = a + b;
    a = b;
    b = next;
  }

  return numbers;
}

const maximums = numberHundred(100);
console.log("Whats the maximum number in the array?", maximums);