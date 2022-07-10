var prompt = require("prompt-sync")();

var string1 = prompt("Nhap vao chuoi thu nhat: ");

var string2 = prompt("Nhap vao chuoi thu hai:");
function findAString(firstString, secondString) {
  for (let i = 0; i <= firstString.length - secondString.length; i++) {
    var check = true;
    for (let j = 0; j < secondString.length; j++) {
      if (firstString[i + j] != secondString[j]) {
        check = false;
        break;
      }
    }
    if (check) {
      console.log(i);
    }
  }
}

console.log(findAString(string1, string2));
