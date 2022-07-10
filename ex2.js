var prompt = require("prompt-sync")();

var n = prompt("Nhap vao so phan tu: ");
n = Number(n);
let a = new Array(n);
for (let i = 0; i < n; i++) {
  var input = prompt("Nhap gia tri cua A[" + i.toString() + "]=");
  a[i] = Number(input);
}

let input2 = prompt("Muon xoa phan tu thu may");
let indexDelete = Number(input2);

for (let i = indexDelete; i <= n - 2; i++) {
  a[i] = a[i + 1];
}

n = n - 1;

for (let i = 0; i < n; i++) {
  console.log("A[" + i.toString() + "]=" + a[i].toString());
}

// String, Boolean, Number, Array Object string =>NUmber NUmber(string) tostring
