let obj = {
    name:"harsh",
    age:26,
    padhai:"subjects"
};

let aa = "name";
obj["name"]

//KEY VALUE STRUCTURE

let obj1 = {
    name:"harsh"
}

// NESTING,DEEP ACCESS,DESTRUCTURING
const user = {
    name:"harsh",
    address:{
        city:"Bhopal",
        pin:462001,
        location:{
            lat:23.2,
            lng:77.4,
        },
    },
};

let {lat,lng} = user.address.locations;

// looping

let obj2 = {
    name:"harsh",
    age:26,
    email:"test@test.com"
};

for (let key in obj2){
    console.log(key,obj2[key]);
}  
let obj3 = {
    name:"harsh",
    age:26,
    email:"test@test.com"
};
Object.keys(obj3);
Object.entries(obj3);
let obj4=Object.assign({},obj)
