// koi bhi code js mein line by line chalega aur ye natural pattern hai bhi hota hai ki code line by line chale but kabhi kabaar aise cases aate hai life mein jaha par aapka code wait krta hai and utni der mein agla code chal jaata hai .....


console.log("hey1");
console.log("hey2");
setTimeout(()=>{
    console.log("hey3");
},2000)

console.log("hey4");

// sync async

// aisa code jo line by line chale hota hai syn code 
// aisa code jab chalne ke liye ready ho jaaye tab chale wo hai async 

// function kuchderbaadchalunga(fnc){
//     setTimeout(()=>{
//         console.log(fnc);
//     },Math.floor(Math.random()*10)*1000);
// }
// kuchderbaadchalunga();

function kuchderbaadchalunga(fnc){
    setTimeout(Math.floor(Math.random()*10)*1000);
}
kuchderbaadchalunga(function(){
    console.log("hey");
});  //callback 

// ek function ko agar aap ek aur function bhej de rahe ho parameter mein to wo parameter wala function kahlaata hai callback


// call back hell
function profilelekaraao(username,cb){
    console.log("fetching profile data....")
    setTimeout(()=>{
        console.log(`Profile fetched of ${username}`);
        cb({_id:1212,username,age:20})
    },2000);

}
function saarepostlekaraao(id,cb){
    console.log("fetching posts data....")
    setTimeout(()=>{
        cb({_id:id,posts:["Hey","Hello"]});
    },3000)
}
function savedpostsnikaalo(id,cb){
    console.log("Fetching saved posts");
    setTimeout(()=>{
        cb({_id:id,saved:[1,2,3,4,5,6,7,8]});
    },3000);
}
profilelekaraao("vaibhav",function(data){
    console.log(data);
    saarepostlekaraao(data._id,function(posts){
        console.log(posts);
        savedpostsnikaalo(data._id,function(saved){

        });
    });
    console.log(profiledata);

});

// PROMISE : RESOLVE,REJECT,THEN,CATCH

// promises=aap ek promise bannate ho jo ki do states main se ek state main jaa sakta haia and vo yaa to resolve hoga ya to reject hoga ye to waqt batayega par humein dono ke liye code likhna padta hai 

// let pr=new Promise(function(res,rej){
//     setTimeout(()=>{
//         res("harsh");
//     },3000);
// }); //3second tak pending state main rahega 


// let pr=new Promise(function(res,rej){
//     setTimeout(()=>{
//         let rn=Math.floor(Math.random()*10);
//         if(rn>5) res("resolved with"+rn);
//         else rej("reject with"+rn);
//     },3000);
// })
// pr.then(function(val){
//     console.log(val);

// }).catch(function(val){
//     console.log(val);
// })

let pr=new Promise(function(res,rej){
    setTimeout(()=>{
        let rn=Math.floor(Math.random()*10);
        if(rn>5) res("resolved with"+rn);
        else rej("reject with"+rn);
    },3000);
})
async function abcd(){
    try{
        let val=await pr;
        console.log(val);
    } catch(err){
        console.log(err);
    }

}
abcd();
