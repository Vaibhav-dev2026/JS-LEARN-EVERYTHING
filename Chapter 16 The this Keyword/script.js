// this keyword special keyword hai kyuki jaise ki baaki sarre keyword ki value ya unka nature same rahta hai this ki value ya nature badal jaata hai is baat se ki aap usey kaha use kar rahe ho 

// global scope
// window hai pradhan mantri -supreme 

console.log(this);

// function ke andar
function abcd(){
    console.log(this);
}
abcd();
// method
let obj={
    vname:"vaibhav",
    age:20,
    sayvname:function(){
        console.log(this.age);
    },
};

obj.sayvname();

// event handler

document.querySelector("h1").addEventListener("click",function(){
    console.log((this.style.color="red"));
});

// class ke andar 

class Abcd{
    
    constructor(){
        console.log("heyhe");
        this.a=12;
    }
}

new Abcd();

let val = new Abcd();

// this ki value

// -----------------------------

// global-window
// function-window
// method with es5 fnc-object
// method with es6 arrow fnc-window
// es5 function inside es5 method -window
// arrow function inside es5 method-object
// event handler -element
// class-blank object

// ARROW FUNCTION LEXICAL THIS 

// let obj={
//     sayName:()=>{

//     }
// }

// MANUAL BINDING,this call aplly bind

// call aplly bind

// function ko cal karte waqt aap set kr sakte ho ki uski this value kya hogi 

let obj1={
    name:"v",
    age:23,
}
function abcd1(a,b,c){
    console.log(this,a,b,c);

}
// abcd1.call(obj,1,2,3);
// abcd1.apply(obj,1,2,3);
let fnc=abcd1.bind(obj,1,2,3);
fnc();





