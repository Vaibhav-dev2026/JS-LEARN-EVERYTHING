// throatlink,debouncing

// debouncing-aap koi action kar rahe ho and aap ye nahi chhate ho ki har action pe kucchh ho,jab bhi mere actions ke beech main koi specific gap aajye to fir action perform ho

let input=document.querySelector("input");

function debounce(fnc,delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fnc(...args);
        },delay);
        console.log("heyhey");

    };
}
input.addEventListener("input",debounce(function(){},1000));

// debounce->ek delay bataaoge tum utna delay jab bhi aayega action ka reaction milega...

// throttle-->interval par chalaunga action agar hota raha and aapne ek interval bataya to utne interval me aapka event chalega 




function throttle(fnc,delay){
    let timer=0;
    return function(...args){
        let now=Date.now();
        if(now-timer>=delay){
            timer=now;
            fnc(...args);
        }
    };
}
input.addEventListener("input",throttle(function(){
    console.log("ran");
},1000)
);





