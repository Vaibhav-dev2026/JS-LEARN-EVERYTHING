// Call Stack (Execution stack)

// JS single-threaded hai->ek time par ek hi kaam karta hai 
// jab tum function call karte ho -wo stack ke top pe chala jata hai 
// function complete hone ke baad stack se nikal jata hai (pop ho jata hai)..

function a(){
    console.log("a");
}
function b(){
    a();
    console.log("b");
}
function c(){
    b();
    console.log("c");
}
c();
// web apis
// console setTimeout setInterval alert prompt ye sab browser support dete hai samjha bhai 
// js ka part nahi hoti hai
// how browser works with the js ?
setTimeout(function(){
    console.log("hey");
},1000);
setTimeout(function(){
    console.log("hey1");
},1000);
setTimeout(function(){
    console.log("hey2");
},1000);
setTimeout(function(){
    console.log("hey3");
},1000);









