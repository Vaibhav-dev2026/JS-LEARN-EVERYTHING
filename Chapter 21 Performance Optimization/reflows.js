const ul=document.querySelector("ul");
const space=document.createDocumentFragment();//it is faster to load dom and memory space in the createDocumentfragement

for(let i=0;i<100000;i++){
    const li=document.createElement("li");
    li.textContent=i;
    space.appendChild(li);
}
ul.appendChild(space);