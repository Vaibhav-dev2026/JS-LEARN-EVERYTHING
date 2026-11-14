// FETCH APIS :GET,POST basics

// fetch api=ise data mangwa sakte ho kisi bhi url se bhai 

// {
//     "name":"ram" //json format
// }

fetch("https://randomuser.me/api/")
.then(function(rawdata){
    console.log(rawdata)
    return rawdata.json();
})
.then((data)=>{
    console.log(data.rsults[0].name.first);
})
.catch((err)=>{
    console.log(err);
});

fetch("https://randomuser.me/api/")
.then((raw)=>raw.json())
.then((data)=>console.log(data.results[0]));

fetch("https://randomuser.me/api/?results=5000")
.then((raw)=>raw.json())
.then((data)=>console.log(data.results[0]));


let form=document.querySelector("form");
let name=document.querySelector("name");
let email=document.querySelector("email");
let password=document.querySelector("password");

form.addEventListener("submit",function(evt){
    evt.preventDefault();
    fetch("url",{
        method:"POST",
        body:JSON.stringify()
    })
})