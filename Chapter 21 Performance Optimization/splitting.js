// 2000 line code -heavy padta 

// isliye usko hisso main divide kar dete 100 se 500 line of code main bhai samjha 

// isi ko bolte hai code splitting 

const btn=document.querySelector("button");

btn.addEventListener("click",async function(){
    let heavy=await import("./heavy.js");
    heavy.veryheavy();
});