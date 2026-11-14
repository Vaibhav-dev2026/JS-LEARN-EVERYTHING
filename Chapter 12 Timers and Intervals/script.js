// setTimeout,clearTimeout

// setTimeout(function(){
//     console.log("hello");
// },5000)

// setInterval(function(){
//     console.log("hello");
// },5000)

// let tm=setTimeout(function(){
//     console.log("hey");
// },3000);
// clearTimeout(tm);

// let tm=setInterval(function(){
//     console.log("hey");
// },3000);
// clearInterval(tm);

// let count=10;
// let interval=setInterval(function(){
//     if(count>=1){
        
//         console.log(count);
//         count--;
//     }
//     else clearInterval(interval);
    
    
// },1000)

let count=0;
let progres=document.querySelector(".progress-bar");
setInterval(function(){
    if(count<99){
        count++;
        progres.style.width=`${count}%`;
    }
},10000/100);

// setInterval bar bar chalta hai bhai
// settimeout sirf ek bar hi chalta hai bhai





