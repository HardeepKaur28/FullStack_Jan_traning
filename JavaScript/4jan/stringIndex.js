//String Indexing
//srt =    s a m a r
//index =  0 1 2 3 4

let fname = "Samar";
let lname = "preet";

console.log(fname[5]);//underfined
console.log(fname.length);
console.log(fname+lname);

//last index of fname : 
console.log(fname.length-1);
 
//String Function : 
//string is immutable : not change in any programming language.
let str = "   hel    lo";
console.log(str);
// console.log(str.trim());//gives error o chromeBr. 
str = str.trim();
console.log(str);

let s1 = 'aman';
let s2 = 'RAHUL';
console.log(s1.toUpperCase());
console.log(s1.toLowerCase());

//slice :
let s3 = "university";
console.log(s3.slice(0,3));
console.log(s3.slice(1));

