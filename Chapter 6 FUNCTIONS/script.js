// what why how
// what functions
// agar code likh diya to wo turant chal jatta hai 
function dance(){
console.log("dance");
console.log("dance");
console.log("dance");
console.log("dance");
console.log("dance");
console.log("dance");
}

dance();
dance();

function lolo(){
    console.log("bhai")
}
lolo();

// function abcd(){

// } FUNCTION DECLARATION

// let fnc = function(){
//     // function expressions
// }

// fat arrow function
// let fnc=()=>{
//     console.log("heyheyhey");
// }
// fnc();

// let fnc=function(){
//  function expressions
// }


// parameter functions

function dance(){
    console.log('${v1} nach raha hai');
}

dance("ghoda");
dance("hiren");
dance("cheel");
dance("lakkadbagha");

function add(v1,v2){
    console.log(v1 + v2);
}
add(1,2);

// parameter and arguments 

// DEFAULT,REST AND SPREAD PARAMETER

// DEFAULT

function adds(v1,v2){
    console.log(v1 + v2);
}
add();

function xyz(...val){
    console.log(val);
}
xyz(1,2,3,4,5,6,7,8,9,10);

// jab arguements kai sare ho to humein utne hi parameter banana padega ,issey bachne ke liye ,hum rest ka use karte hai... agar ... function ka parameter space main lage to wo rest operator hai bhai 

function tyu(a,b,c,...val){
    console.log(a,b,c,val);
}
tyu(1,2,3,45,6,7);

// return matlab jaha se aaye ho vahi daal dunga

function pqr(){
    return 12;
}

pqr();

let val=pqr(23);
console.log(val);

// first class functions -> functions ko values ki tarah treat karte ho

// higher order functions hota hai jo ki return kare function ya fir accept kare ek function apne parametre main 

function opu(){

}

opu(function(){

})

// PURE VS IMPURE FUNCTIONS

// aisa function jo ki bahar ki value ko naa badle wo hai pure functions

let d = 12
function qsa(){
    console.log("heyhey");
}    //  pure functions

function hui(){
    d++
} //impure functions

// aisa functions jo bahar ki value de wo hai impure functions


// CLOSURES -> EK FUNCTION JO RETURN KARE EK AUR FUNCTION AUR RETURN HONE WALLA FUNCTION HAMESHA USE KAREGA PARENT FUNCTION KA KOI VARIABLE 

function gaw(){
    let p = 13;
    return function(){
        console.log(p);
    }
} 

// LEXICAL SCOPING

function tef(){
    let r=12;
    function tky() {
        let o = 13;
        function pqw(){
            let z = 2;
        }

        
    }  
} 

(function(){
    console.log("heyhey")

})();
//  iIFE 

// HOISTING 

scd();


function scd(){
    console.log("ursnud");
}
// Q1 WHATS THE DIFFERENCES BETWEEN FUNCTION DECLARATION AND EXPRESSIONS IN TERMS OF HOISTING ?

lol();

function lol(){

    console.log("greet");

}

// Q2
let multiply = (a,b)=> {
    return a*b;
}; 

// write a bmi calculator 

function bmi(weight,height){
    return weight / (height * height); 
    
}

console.log(bmi(69,1.7));
console.log(bmi(69,1.7).toFixed(2));

function discountcalculator(discount){
    return function(price){
        return price - price * (discount/100);

    };
}
let discounter = discountcalculator(10);
console.log(discounter(200));

function counter(){
    let count=0;
    return function (){
        count ++;
        return count;
    };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

let w = counter();
console.log(w());

function double(val){
    return val * 2;
}

console.log(double(15));


(function (){
    const password ="secret password";
    console.log(password);
})();

console.log(password);





