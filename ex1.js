// function SumArr(arr) {
//   // return ..
//   var total = 1;
//   var maxElement;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[0] > arr[i + 1]) {
//       maxElement = arr[0];
//     }
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 9];
// let result = SumArr(arr);

// console.log({ result });

// function KiemTraNghiem(a, b) {
//   if (a == 0 && b != 0) {
//     return null;
//   }
//   if (a != 0 && b != 0) {
//     return -b / a;
//   }
//   return "infinit e";
// }

// console.log(KiemTraNghiem(3, 4));

// let a = 3;
// if (true) {
//   a++;
// }
// if (true) {
//   a++;
// }
// console.log({ a });

// function example(a) {
//   if (a < 1) {
//     return "a < 1";
//   }
//   if (a < 2) {
//     return "a < 2";
//   }
// }
// console.log(example(200));

// function logElement(n) {
//   var i = 1;
//   while (i <= n) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("fizz buzz");
//     } else if (i % 5 == 0) {
//       console.log("fizz");
//     } else if (i % 3 == 0) {
//       console.log("buzz");
//     } else console.log(i);
//     i++;
//   }
// }
// logElement(50);

var ar = [1, 2, 3, 4, 5, 6];
function evenNumber(array) {
  let i = 0;
  while (i < array.length) {
    if (array[i] % 2 == 0) {
      console.log(array[i]);
    }
    i++;
  }
}

evenNumber(ar);

function maxNumber(array) {
  let i = 0;
  let max = ar[0];
  while (i < array.length) {
    if (max < array[i]) {
      max = array[i];
    }
    i++;
  }

  return max;
}

console.log(maxNumber(ar));

function removeElement(array) {
  let i = 0;
  while (i < array.length) {

  }
  i++;
}


let arr3 = new Array(10);
