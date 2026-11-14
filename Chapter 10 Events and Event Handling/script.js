// browser mein page par koi bhi harkat karo event riase ho jayega

// kuch screen par ho aur aapko reaction dena ho to us waqt aapko event handle karna aana chhaiye 

// event matlab hota hai koi action hua

// event listener ka matlab hai aapne koi action ka reaction diya 

// let h1=document.querySelector("h1");

// h1.addEventListener("click",function(){
//     h1.style.color="red"
// })

// step 1 select the paragraph first

// step 2 paragraph pe event listner add karna hai

// step 3 fir paragraph pe css apply karna hai bhai samjha 

// let p=document.querySelector("p");

// p.addEventListener("click",function () {
//     p.style.color="green";
// });

// let p = document.querySelector("p");

// p.addEventListener("dblclick",function(){
//     p.style.color="yellow";
// })

// Element.addEventListener("event name",function (){
    
// })

// p.removeEventListener("dbclick",function(){
//     console.log("removed");
// });

// function dbclick(){
//     p.style.color="yellow";
// }

// p.addEventListener("dbclick",dbclick);
// p.removeEventListener("dblclick",dbclick);

// let p=document.querySelector("p");

// p.addEventListener("click",function(){
//     p.style.color="red";
// })

// let input=document.querySelector("input");

// input.addEventListener("input",function(){
//     console.log("typed");
// })

// let inp=document.querySelector("input");

// inp.addEventListener("input",function(dets){
//     if(dets.data!== null){
//         console.log(dets.data);
//     }
    
// })

// let inp=document.querySelector("input");

// inp.addEventListener("input",function(dets){
//     if(dets.data!==null){
//         console.log(dets.data);
//     }
// })

// let inp =document.querySelector("input");

// inp.addEventListener("input",function(){
//     if(dets.data!==null){
//         console.log(dets.data);
//     }
// })

// CHANGE EVENT TAB CHALTA HAI JAB AAPKI KOI INPUT SELECT YA TEXTAREA MEIN LOI CHANGE HO JAYE

// let sel=document.querySelector("select");
// let device=document.querySelector("#device");

// sel.addEventListener("change",function(dets){
//     // console.log(dets.target.value);
//     // device.textContent="Device Selected"
//     device.textContent='${dets.target.value} Device Selected';
// });

//approach
// 

// let h1=document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//     // h1.textContent=dets.key;
//     // console.log(dets.key);
//     if(dets.key===""){
//         h1.textContent="SPC";
//     }
//     else{
//         h1.textContent=dets.key;
//     }
// });

// let btn=document.querySelector("#btn");
// let fileinp=document.querySelector("#fileinp");

// btn.addEventListener("click",function(){
//     fileinp.click();
// })

// fileinp.addEventListener("change",function(){
//     const file=dets.target.files[0];
//     if(file){
//         btn.textContent=file.name;
//         console.log(file);

//         // btn.textContent=dets.target.files[0].name;
//     }
//     // btn.textContent=dets.target.files[0].name;
//     // console.log(dets.target.files[0].name);
// })

// let form=document.querySelector("form");
// let inputs=document.querySelectorAll("input");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();

//     console.log(
//         inputs[0].value,
//         inputs[1].value,
//         inputs[2].value,
//         inputs[3].value
//     );
// })

// let form=document.querySelector("form");
// let inputs=document.querySelectorAll("input");

// let main=document.querySelector("#main");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();

//     let card=document.createElement("div");
//     card.classlist.add("card");

//     let profile=document.createElement("div");
//     profile.classList.add("profile");

//     card.appendChild(profile);
//     console.log(card);

//     let img=document.createElement("img");
//     img.setAttribute("src","movie9.jpeg");

//     let h3=document.createElement("h3");
//     h3.textContent="Ghoda";
//     let h5=document.createelement("h5");
//     h5.textContent="ghodi";
//     let p=document.createElement("p");
//     p.textContent="ghoda is very good and ghoda is tall";

//     card.appendChild(profile);
//     profile.appendChild(img);


//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);

//     inputs.forEach(function(inp){
//         if(inp.type!="submit"){
//             inp.value="";

//         }  

//     })
// });

// let abcd=document.querySelector("#abcd");
// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor="yellow";
// });

// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor="red";
// });

// window.addEventListener("mousemove",function(dets){
//     console.log(dets);
// });

// window.addEventListener("mousemove",function(dets){
//     console.log(dets.clientX,dets.clientY);
// })

// let abcd=document.querySelector("#abcd");
// window.addEventListener("mousemove",function(dets){
//     abcd.style.top=dets.clientY+"px";
//     abcd.style.left=dets.clientX+"px";
// });

// EVENT OBJECT TAGET AND TYPE

// let abcd =document.querySelector("#abcd");
// abcd.addEventListener("click",function(dets){
//     console.log(dets);

// });

// PRVENT DEFAULT

// let form=document.querySelector("form");
// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
// })

// EVENT BUBBLING AND CAPTURING

// jispe event aaayega agar uspar listener nahi hua to humara event uske parent pe listnmer dundhegea aur aisa karte karte upar ki tarf move karega 

// main div 
//     nav div
//         links
//         button

// document.querySelector("#nav").addEventListener("click",function(){
//     alert("clicked")
// }); //EVENT BUBBLING

// let ul=document.querySelector("ul");
// ul.addEventListener("click",function(dets){
//     dets.target.style.textDecoration="line-through";
//     // alert("clicked");
// });

// let ul=document.querySelector("ul");
// ul.addEventListener("click",function(dets){
//     dets.target.classlist.add("lt");
// });

// let ul=document.querySelector("ul");
// ul.addEventListener("click",function(dets){
//     dets.target.classlist.toggle("lt");
// });


// EVENT CAPTURING


// let a=document.querySelector(".a");
// let b=document.querySelector(".b");
// let c=document.querySelector(".c");
// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.log("button clicked");
// });
// c.addEventListener("click",function(){
//     console.log("c clicked")
// });
// b.addEventListener("click",function(){
//     console.log("b clicked")
// });
// a.addEventListener("click",function(){
//     console.log("a clicked")
// });


// EVENT CAPTURING

// jab bhai aap click karte ho ya to koi bhi event raise karte ho aapka to aapka event flow hai ya propagation bhi hai vo do phases main chalta hai bhai samjha bhai:

// phase1:event top level element se neeche ki tarf aayega 
// phase 2:event raised element se parent ki taraf jayega 

// aur pahele phase 1 hota hai bhai 


// humesha phase1 pahele hoti hai par by default off rahyti hai agar hum usey on karde to pahele phase 1 ka answer milega bhai ....

// capture phase chalta hai ye on karna sikho pahele bhai samjha....

// phir bubbling phase chalta hai ye by deafult on raht haia bhai samjha ....

// let inp=document.querySelector("input");
// let span=document.querySelector("span");

// inp.addEventListener("input",function(){
//     // console.log("input hua")
//     // console.log(inp.value.length)
//     span.textContent=20-inp.value.length;
//     span.textContent=inp.value.length;
// })

let inp=document.querySelector("input");
let span=document.querySelector("span");

inp.addEventListener("input",function(){
    let left=20-inp.value.length;
    if(left<0){
        span.textContent=left;
        span.style.color="red";
    }
    else{
        span.textContent=left;
        span.style.color="white";
    }
    // console.log("input hua")
    // console.log(inp.value.length)
    // span.textContent=20-inp.value.length;
    // span.textContent=inp.value.length;
});

