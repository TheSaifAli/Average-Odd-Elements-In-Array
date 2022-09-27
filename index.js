/* Average of Odd element In Array */

var arr = [10, 24, 54, 72, -10, -88, 100, 564];
var sum = 0;
var count = 0;
for (var i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    sum = sum + arr[i];
    count = count + 1;
  }
}
console.log(sum);
console.log(sum / count);
