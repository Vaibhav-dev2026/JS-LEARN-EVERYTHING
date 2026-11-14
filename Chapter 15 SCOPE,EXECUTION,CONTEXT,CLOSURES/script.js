// SCOPE- aap apne created variables and functions kaha tak use kar sakte ho 

//line 1--variable 

// function abcd(){
//     var a=12;
// }
// console.log(a);

// scope - 1)functional scope
        // -2)Global scope
        //-3)block scope

// 

// functional scope-function ke andar hi use ho sakti hai 
// global scope-poore code mein kahi bhi use ho sakti hai 
// block scope-{} curly braces mein hi use ho sakti hai 

// function abcd(){
//     var a=12;

// } //functional scope

// var a=12; global scopr hai 
// agar aapka code kisi bhi {} ke anadar nahi hai to aapka code global hai 

// {

// } sirf curly braces hai ya if statement main laga hai to bhai ye block scope hai bhai samjha and function main gara curly braces lage hue to bhai vo functional scope hota hai bhai 


// EXECUTION CONTEXT-

// jd sabse pahele jaise hi aapka function dekhta hai sabse pahele js banata hai execution context ,ye ek process hai jo ki do different phases main chalta hai ,memoery phase and doosre ka naam hai execution phase 

// function abcd(){
//     var a=12;
//     let b=13;
//     let c=14;

//     // .......


//     // ......
// }



// js-lexical scoping ->ki aap kaha par physically available ho ye poori tareeke se depend karte hai ki aap kya access kro paoge 

// function abcd(){
//         let a=12;
//         function defg(){
//                 console.log(a);
//         }
// }

// dynamic scoping-kaha se call kar r he ho uspe depend karega ki kya value milegi 
// dynamic scoping not exist in js
// let a=12;
// function abcd(){
//         console.log(a);

// }
// function defg(){
//         let a=13;
//         abcd();
// }
// defg();

// CLOSURES DEFINITION

// --> closures hote hai function jo ki kisi bhi parent fn ke andar wala ho aur andar waala function return ho raha ho and returning fn use kare parent function ka koi variable ...

// function abcd(){
//         let a=12;
//         return function(){
//                 console.log(a);

//         };
// };

// faayde nuksaan par 
// private variables
// global pollution

// ye sach hai fnc ke khatam hone pe aapka fnc and uske variables khatm hojaate hai par jab bhi closure banata hai to aapka fnc aur uske variables ka ek backlink bnaya jaata hai aur uska naam hota hai [environment]....

// function countforme(){
//         let c=0;
//         return function(){
//                 c++;
//                 console.log(c);
//         };
// }
// let fnc=countforme();
// fnc();
// fnc();
// fnc();

// let fnc2=countforme();
// func2();
// func2();
// func2();
// func2();
// func2();
// func2();

// function clicklimiter(){
//         let click=0;
//         return function(){
//                 click++;
//                 if(click<5){
//                         click++;
//                         console.log(`clicked:${click}times`);
//                 }
//                 else{
//                         console.log("LIMIT EXCEEDED<TRY AFTER SOME TIME")
//                 }
//         };
// };
// let fnc=clicklimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();


// TOASTER

function createToaster(config) {
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;
    div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

    document.querySelector(".parent").appendChild(div);

    if (config.positionX !== "left" || positionY !== "top") {
      document.querySelector(".parent").className +=
        ` ${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
    }
    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({ 
  positionX: "right",
  positionY: "bottom",
  theme: "light",
  duration: 3,
});
toaster("Download Done");
setTimeout(() => {
  toaster("Vaibhav accepted your request");
}, 2000);

