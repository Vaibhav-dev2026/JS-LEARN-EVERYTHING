// creating a array
// let marks = [10,20,30,40,50];
// let arr = [1,2,3,4];
// arr[2] = 12;
let arr = [1,2,3,4,5];
arr.push(7000);
arr.pop();
arr.shift();
arr.unshift(0);
arr.splice(2,1);
arr.slice(2,1);
let arr1=[1,2]
arr1.reverse();
let arr4=[1,2,3,4];
let sr=arr4.sort(function (a,b){
    return b-a;
})

// MAP,FILTER,REDUCE
arr.forEach(function(val){
    console.log(val); 
});

let arr2 = [11,62,3,4,25];

arr2.forEach(function(val){
    console.log(val);
 });
let arr36 =[11,62,3,4,25]

// map sirf tab use karna hai jab aapko ek naya array bananan hai pichle array ke data ke basis par

// map dikhte hi sath man mein ek blank array bana liya karo 


let newarr36 = arr36.map(function(val){
    return 12;
})

// jab bhi aapko aisa koi case dikh jaye jaha par ek naya ek array se naya array banega and wo naya array kuch values ko rakhega tab map lagega 

// filter 

let arr9 =[1,2,3,4,5,6,7,8];

let newarr9 = arr9.filter(function(val){
    if(val>4)
    return true;
});


// reduce

let arr10 = [1,2,3,4,5,6];

let ans = arr10.reduce(function(accumulator,val){
    return accumulator + val;
},0);

// find

let arr11 = [
    {id: 1,key:1},
    {id: 2,key:2},
    {id: 3,key:1},
]

let va = arr11.find(function(val){
    return val.key === 1;
});

let arr13 = [10,30,32,90];

let any=arr13.some(function(val){
    return val > 85;
});

// every

let arr14 = [10,30,32,40];

let eve = arr14.every(function(val){
    return val > 15;
});

// DESTRUCTING SPREAD OPEARTOR 

let arr15 = [1,2,3,4,5];

let [a,b] = arr15; //destructing 

let arr116 = [1,2,3,4,5,6,7,8,9];
let arr16 = [...arr116];

// ... -> SPREAD OPERATOR


// PRACTICE QUESTIONS ON THE ARRAY 


// 1.create an array with 3 fruits and print the second fruit

let fruit = ["apple","guava","banana"];


// ADD "MANGO" AT THE END AND PINEAPPLE AT THE BEGGINNING OF THIS ARRAY:

let fruits = ["Apple","Banana"];
fruits.push("Mango");
fruits.unshift("Pineapple");

// REPLACE BANANA WITH KIWI IN THE ARRAY ABOVE .

let fruits1 = ["Apple","Banana"];
fruits1.pop();
fruits1.push("Kiwi");

// REMOVE THE LAST ITEM FROM THIS ARRAY USING A METHOD 
let numbers = [1,2,3,4];
numbers.pop();

// INSERT "RED" AND "BLUE" AT INDEX 1 IN THIS ARRAY:

let colors = ["Green","Yellow"];
colors.splice(1,0,"Red","Blue");

// EXTRACT ONLY THE MIDDLE 3 ELEMENTS FROM THIS ARRAY

let items = [1,2,3,4,5,6];
let newarr19 = items.slice(1,4);
console.log(newarr19);

// SORT THIS ARRAY ALPHABETICALLY AND THEN REVERSE IT:

let names1 = ["Zara","Arjun","Mira","Bhavya"];
names1.sort().reverse();

// USE .MAP() TO SQUARE EACH NUMBER:

let arr20 = [1,2,3,4];
let newarr20 = arr20.map(function (val){
    return val ^ val;
});


// USE .FILTER() TO KEEP NUMBERS ARE GRATER THAN 10;

let arr21 = [5,12,8,20,3];

arr21.filter((val) => {
    return val>10;
});

// USE .REDUCE() TO FIND THE SUM OF THIS ARRAY :
let arr30 = [10,20,30];

arr30.reduce(function(acc,val){
    return acc + val;
},0);

// USE .FIND() TO GET THE NUMBER LESS THAN 10 

let arr31 = [12,15,3,8,20];

let ansa = arr31.find(function (val) {
    return val < 10;
});

// USE .SOME() TO CHECK IF THE ANY STUDENT HAS SCOREED BELOW 35:

let arr50 = [45,60,28,90];
let ansaq = arr50.some(function(val){
    return val <35;

});

// USE .EVERY() TO CHECK  IF ALL NUMBERS ARE EVEN:

let arr56 = arr.every(function (val) {
    return val % 2 === 0;
});


// DESTRUCTURE THIS ARRAY THE TO GET THE FISRT NAME AND AST NAME 
let fullname = ["Harsh","Sharma"];
let [firstName,lastname] = fullname;

// MERGE TWO ARRAYS USING SPREAD OPEARATOR

let p = [1,2];
let w = [3,4];
let v = [...a,...b];

//ADD "INDIA"TO THE START OF THIS ARRAY USING SPREAD:
let countries = ["USA","UK"];
countries = ["India",...countries];

// CLONE THIS ARRAY PROPERLY (NOT BY REFERNCE):
let arrt = [1,2,3];
let arre = [...arrt]; 