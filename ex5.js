var prompt = require("prompt-sync")();

var n = prompt("Nhap vao so phan tu: ");
n = Number(n);
let a = new Array(n);

for (let i = 0; i < 2; i++) {
  var input = prompt(`Nhap phan tu thu ${[i + 1]}: `);
  a[i] = Number(input);
}

function fibonacci(array) {
  for (let i = 2; i < array.length; i++) {
    a[i] = array[i - 2] + array[i - 1];
  }

  return array;
}

console.log(fibonacci(a));
