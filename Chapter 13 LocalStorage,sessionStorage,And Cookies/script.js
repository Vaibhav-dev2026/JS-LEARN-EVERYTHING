// local storage->aapke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga bhai ..

// sessionStorage->ye aapke data temporarily store karta hai matlab ki tab band hua aur data gya 

// cookies->ye bhi data store karta hai and aapka data browser ke cookies naam ki property mein save hota hai and ye cookie concept kam data ya light data ke liye hota hai bhai...

// localStorage
// store kaise kare 
// data fetch kaise kare 
// remove kaise kare 
// update kaise kare 

localStorage.setItem("name","harsh"); //store kaise kare

let val=localStorage.getItem("name"); //data fetch in local storage

localStorage.removeItem("name"); //remove karege  removeitem

localStorage.setItem("name","harsh");//updating in localstorage

// sessionStorage




// Storage {name: 'harsh', IsThisFirstTime_Log_From_LiveServer: 'true', length: 2}


// cookies
// browser main chhota data store karne ke liye cookies ka istamaal hota hai 

// cookies ~4kb 
// localStorage sessionStorage - ~5Mb

// cookies main bhi data store karoge wo data page reload par automatically server par jayega

document.cookie="email=harsh@test.com";
//'email=harsh@test.com'


document.cookie="age=26";
// o/p 'age:26'

localStorage.setItem("friend",["akash","sumit","amit"]);

// wec cannot save objects array in localstorage 

JSON.stringify([1,2,3,4,5])
localStorage.setItem("friends",JSON.stringify(["akash"]));

let fr=JSON.parse(localStorage.getItem("friends"));
console.log(fr);
// JSON.parse()
// Local storage main array vaghera store nahi kar sakte hai isliye hum usai string bana ke store karte hai bhai...

// jab local storage data nikalte tab hume string milta hai 
// aab string se usae apne natural form main lane ke liey JSON.parse()








