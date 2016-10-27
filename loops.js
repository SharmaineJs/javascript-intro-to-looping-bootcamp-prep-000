/*It takes an array as an argument. Start counting from 0, and, using a for loop, add a string to the array. If your i value is 1, add the string "I am 1 strange loop."; but if your i value is anything else, add the string "I am ${i} strange loops." to the array 25 times. Then return the array.*/
function forLoop(array){
  for (var i = 0; i < 25; i++) {
    if (i == 1 ){
      array.push(`I am ${i} strange loop.`);
    }
    else {
      array.push(`I am ${i} strange loops.`);
    }
    console.log(array);
  }
return array
}
/* counts down from n to zero in console. After it counts down to zero, print 'done' in console */
function whileLoop(n){
  while (n > 0) {
    n--;
    console.log(n)
  }
    return 'done'
    }
/*Define a function called doWhileLoop in loops.js. The function should take an array as an argument. Use the maybeTrue() function (you can copy it from this README) as the condition, and remove elements from the array until the array is empty or until maybeTrue() returns false. (Your condition might look something like array.length > 0 && maybeTrue().) Finally, return the array.*/
 function doWhileLoop(array){
   function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  array.pop()
} while (array.length > 0 && maybeTrue());
return array
 }
