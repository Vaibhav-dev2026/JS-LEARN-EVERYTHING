//Data Types 

//data ka types

// 12 harsh true [] {} null undefined NaN Symbol bigInt 

//Primitives->aisi sari values jinko copy karne par tumhe ek real copy mil jayega

// string, number,boolean,null,undefined,symbol,bigint

// refrences-> inko copy karne par real copy nahi milegi but aapko reference milega - parent ka 

// arrays,objects,functions
// [] {} ()

// let a = 12; //primitive datatype
// let b = a; 

// a = b+2;

// arrays - []
//objects-{}
//functions-()

//(1) string

// ''-single quotes
// ""-double quotes
//''-backticks

//(2) Number

// 12 - integer 
//12.3 - number

// (3) Booleans

// true and false 

// (4) Nulls

// null ka matlab hai aapne jan boojh kar koi value nahi di 

// (5) UNdefined 
// undefined ka matlab ki aapne ek variable banayaa aur usey value nahi de to jo value by default mili wo hai undefined 

let d;

// (5) symbol

//symbol -> unique immutable value 

//future main hum koi libraries use karege ab is case main us libraries main kai baar kuch fields hoti hai jinse hum similar hum bhi banaa dete hai aur galti se humari bannai hui fields us librray ki original fields ko change kar deta hai 

// let sheryjs = {
//     uid:12;
//     model:"harsh"
// }

// sheryjs.uid=1;

let u1 = Symbol("uid");
let u2 = Symbol("uid");

let obj = {
    uid:1,
    name:"harsh",
    age:12,
    email:"test@test.com"

};

// let u1 = Symbol("uid")
// obj[u1] = "001"

// (5)bignit
// let e = 9007199254740001n;
// e + 3;

// REFERENCE TYPES 

let k = [1,2,3];
let l = a;

k.pop();

let a = {
    name:"harsh"
    
};
let b = a;

b.name="harshita"

//DYNAMIC TYPING -> JS MEIN STATIC TYPING NAHI HAI AND YAH PAR HAI DYNAMIC TYPING JISKA MATLAB HAI HAI AAP DATA KO CHANGE KAR SAKTE HO KYUKI YAHA PAR DYNAMIC DATA TYPES HAI BHAI 

let z = 12;
z = true;
z = "string";
z = [];
z = null;
z = undefined;

// typeof quirks (e.g ,typeof null =='object')

//Type coercion (== vs ===)
// Truthy vs Falssy values

// types coercion -> concept jismein aapka ek type automatically convert ho jayega 

"5" + 1

//  + -> two works concetnating and addition operation in mathematical 

// - -> - they have only one works only mathematical operations 

// TRUTHY VS FALSY VALUES 

// 0 false "" null undefined NaN document.all
// rest all -> true

// if(null){

// }

// if(-1){

// }-- true values


//PRACTICE SECTION 

// PREDICT THE RESULT : true + false ,null + 1,5 + "5",!! undefined
