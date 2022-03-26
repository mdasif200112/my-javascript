var num = 20;
console.log(typeof(num));

num = toString(num);
console.log(typeof(num));

var num1 = '2l';
num1 = parseInt(num1);
console.log(typeof(num1));

var num2 = '200.34343';
num2 = parseFloat(num2);
console.log(typeof(num2));

var number = 2.434343242;
console.log(number.toFixed(1));
 
var number = 2.3453423432;
console.log(number.toPrecision(1));

console.log(typeof(Number('12')));

console.log(Number(true));


