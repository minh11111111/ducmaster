var prompt = require("prompt-sync")();

var n = prompt("Nhap vao so phan tu: ");
n = Number(n);
let a = new Array(n);
for (let i = 0; i < n; i++) {
  var input = prompt("Nhap gia tri cua A[" + i.toString() + "]=");
  a[i] = Number(input);
}
let input2 = prompt("Muon nhan phan tu thu voi may:");
let multipledElement = Number(input2);

for (let i = 0; i <= n - 1; i++) {
  a[i] = a[i] * multipledElement;
}
for (let i = 0; i < n; i++) {
  console.log("A[" + i.toString() + "]=" + a[i].toString());
}
