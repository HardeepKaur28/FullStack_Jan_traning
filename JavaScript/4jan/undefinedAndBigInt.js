let name ;
console.log(typeof name);
name = 'samar';
console.log(typeof name);

//BigInt : n : 16bit Capacity
let num = 43423521646343563234534;
console.log(num);
let num1 = 43423521646343563234534n;
console.log(num1);

let x = BigInt( 43423521646343563234534);
console.log(x);

let y = BigInt(34);//gives error : BigInt(a)
console.log(y);