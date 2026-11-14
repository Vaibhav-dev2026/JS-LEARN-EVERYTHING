// DOM ka code and logic ka code alag rahna chhaiye
// separation of concerns aapka logic alag and aapka dom alag alg aapka api cal karna alag iski sabko separtion of concers 

const btn=document.querySelector("button");
const ul=document.querySelector("ul");

function add(n1,n2){
    return n1+n2;
}
btn.addEventListener("click",function(){
    const num1=Math.floor(Math.random()*10);
    const num2=Math.floor(Math.random()*10);

    let finaladd=num1+num2;
    let li=document.createElement("li");
    li.textContent=finaladd;
    ul.appendChild(li);
})

// map--> ek array ke top pe chalta hai and us array ke sabhi function ke nadar aate hai and map function ek naya array return krta hai and us naye array mein jo bhi map ne return kiya hoga wahi placed hota hai ...

const arr=[1,2,3,4,5];

function myMap(arr,callback){
    let newarr=[];
    for(let i=0; i<arr.length; i++){
        newarr.push(callback(arr[i],i,arr));
    }
    return newarr;
}
// let ans=myMap([1,2,3,4],(num)=>num+2);

let ans=myMap(arr,function(val){   
    return val+2;

})