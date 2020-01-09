//Create some arrays

const numbers = [43,56,23,33,44,36,5];
const numbers2 = new Array(4,12,85,97,53,5);
const fruit = ["Apple", "Banna", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, {a:1, b:2}, new Date];

let val;

//Array length
val = numbers.length;

//Check if is array
val = Array.isArray(numbers);

//Get single value
val = numbers[3];

 //Insert into array
numbers[2] = 100;

//Find index of value
val = numbers.indexOf(36);

//MUTATING ARRAYS

// //Add on to end
// numbers.push(250);

// //Add on to front
// numbers.unshift(120);

// //Take off from end
// numbers.pop();

// //Take off from the front
// numbers.shift();

// //Splice values
// numbers.splice(1,3);

// //Reverse
// numbers.reverse();

//Concatenate array
val = numbers.concat(numbers2);

// //Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// //Use the "compare function" 
// val = numbers.sort(function(x, y) {
//     return x- y;
// });

// //Reverse sort
// val = numbers.sort(function(x, y) {
//     return y - x;
// });

//Find
function under50(num){
    return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);