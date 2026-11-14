// words vs keywords = words =harsh etc keywords =var let etc special meaning
// var, let,const - line-by-line comparision
a = 12; //not appereciated very bad
var username="harsh"
var a;
var a = 12;
let a;
let a = 12;
const a = 12;

//DECLARATION AND INITALIZATION
var a; //declare karna
var a = 12; //declare and initalize

var a = 12;//window main add hota hai bhai
//functions scoped hota hai
//aap fir se declare kr sakte ho same name se and error nahi aayega
let  a = 12;
let  a= 13;

const dulh = "lab"
const dulhan = "laby"

function abcd(){
    if(true){
        var a = 12;
    }
    
}

//Scope (global,block,functions)

function abcd(){
    var a=12;
}//block 

var a = 12;//functional

var a = 12; //global scope

{

    let b=12; //block scoped
}

{
    var a=12 //global scoped kyu ki var ki respect nahi karta gloabal to pure program main use hota hai

}

function abcd(){
    if(true){
        let a =12;
    }
}

// global scoped
// function scoped
// block scope

//Reassignment ,redeclaration

//redeclaration is possible with var not with the let

var a=12;
a=32;

let a=12;
b=32;

var a = 12; //DECLARATION
a =13; //REASSIGN KARNA VALUE KO 

var a;//REDECLARE IS PROBLEM TO FIX THAT WE CAN USE LET
let a=12;

//TEMPORAL DEAD ZONE
//tdz - utna area jitne mein js pata to hai ki variable exit karta hai par wo value nahi aapka value  nahi de sakta 
console.log(a);

var a = 12;

//Hoisting impact per type 
//hoisting-> ek variable ko jab js mein banaate hai to woh variable do hissao mein toot jata hai and uska declare part upar chala jaata hai and uska initalization part neeche reh jata hai\


// q3
var x=1;//global
{
    var x = 2;//global
}
console.log(x);

//q4
let a=10; //block scope //global
{
    let a=20;
    console.log("Insider: ",a);
}
console.log("Outside:",a);
