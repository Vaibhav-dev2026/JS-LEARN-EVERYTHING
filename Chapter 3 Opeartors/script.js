// CHAPTER 3 OPERATORS 

// ARITHMETIC,COMPARISON,LOGICAL,ASSIGNMENT,UNARY,TERNARY

// + ,-,*,/,%
// = ,==,==
// <,>,<=,>=,!,!=,!==,!!
// && ||
// ?:

//(1) ARITHMETIC OPERATOR
// ADDITION
// 1 + 2 = 3
// "ha" + "rsh" = "harsh"  (concatenation)
// SUBTRACTION
// 12-3=9
// MULTIPLICATION
// 12 * 3 =36
// DIVISON /MODE 
// 12/2=6

// (2) COMPARISION OPERATOR
// =
// == NOT STRICT 
// === STRICT COMAPRISION
// !=
// !==
// >=
// <=
// <
// >

// let a=12; ASSIGNMENT OPERATOR IS "="

// 12==13 FASLE
// 12 =="12" TRUE
// 12==="12" FALSE
// 12 != 13  TRUE
// 12 !=13  TRUE

// (3) ASSIGNMENT OPERATOR 

// =
// +=
// -=
// *=
// /=
// %=

// let a=12;
// a+=3;
// a-=11;
// a*=2;
// a/=2;
// a%=3;


// (4) LOGICAL OPEARTOR

// &&  || !

// true && true 
// false && true
// true && false
// false && false 

// AND 
// OR 

// false || true

// (5) UNASRY OPEARTOR

// + - ! typeof ++ -- 

// (6) TERNARY OPEARTOR

// ? :

// condition ?  true hui ka code : false hui ka code

// 12>13? console.log("true") : console.log("false"); 


// PRACTICE QUESTION

// let x=10;
// let y=20;

// if(x<5 && y<25) {
//     console.log("A");
// }else{
//     console.log("B");
// }

// let isAdmin=true;
// let islooggedin=false;

// if(isAdmin || isloggedin){
//     console.log("Access granted");
// }else{
//     console.log("Access denied");
// }

// let temp=35;

// if(!(temp<30)){
//     console.log("hot");
// }else{
//     console.log("pleasant");
// }

let a=0;

if(a){
    console.log("truthy");
}else{
    console.log("Falsy");
}

let score=78;
let grade=score>=90?"A":score>=75 ? "B":score>=60 ? "C":"fail";

console.log(grade);

let points=120;
let status=points>100 ? "Gold":points>50?"Silver":"Bronze";
console.log(status)

let loggedin=true; 
let hastoken = false;

let Access=loggedin &&  hastoken ? "Allow":"Deny";

console.log(Access);

let d=5;
d++;
++d;
console.log(d);

let p=4;
let q=++p;
console.log(p,q);

let m=10;
console.log(m--);
console.log(m++);

let n=5;
let result=n++ + ++n;
console.log(result);

let like=100;
function likepost(){
    return ++likes;
}
console.log(likepost());
console.log(likes)


let count =5;
if(count-- ===5){
    console.log("Matched");
}else{
    console.log("Not matched")
} 

