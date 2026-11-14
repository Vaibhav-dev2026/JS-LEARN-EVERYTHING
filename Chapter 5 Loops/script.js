// repeat karne ko loop kahte hai
// for,while,foreach
// 1 1 1 1 1 1 1 1 1 -repeatition
// 1 2 3 4 5 6 7 8 9 -repeatition

// kaha se janna hai kaha tak jana hai  -> kaise jana hai 
// for loop

// 1-50

// kaha se jana hai -> kab rukna hai  --> kaise jaana hai
// while loop

// 1 -40 for
// 20-30 for
// hello na aajaye - while
// laal color ka ped - while
// bhaalu miley jab jised upar hiran baitha hai - while


// for loop
// 1 - 100
// for ( start; end; Change) {

    
// }

for(let i=3; i<101; i++){
    console.log(i)

}

// while

// while(start; end;){
//     //code
//     change 
// }

let i=1;
while(i<32){
    // code
    console.log(i);
    i++; 
}
// do while

// do{

// }
// while(end)

let j=1;
do{
    console.log(j);
    j++;

}
while(j<2)

// BREAK AND CONTINUE 

// BREAK



for(let i=1; i,201; i++){
    console.log(i);
    if(i==32){
        break;
    }
}

// CONTINUE 

for(let i=1; i<201; i++){
    if(i==32){
        continue;
    }
    console.log(i);
}

//Q1) PRINT THE NUMBERS FROM 1 TO 10 USING A FOR LOOP

for(let v=1; v<11; v++){
    console.log(v);
}

// Q2) PRINT THE NUMBERS FROM 10 TO 1USING A WHILE LOOP

for(let k=10; k>0; k--){
    console.log(k);
}

let k=10;
while(k>0){
    // code
    console.log(k);
    k--;
}

// Q3 PRINT EVEN NUMBERS FROM 1 TO 20 USING A FOR LOOP.
 
for(let i=1; i<21; i++){
    if (i%2===0){
        console.log(i);
    }
}


// Q4 PRINT ODD NUMBERS FROM 1 TO 15 USING A WHILE LOOP

let x=1;
while(x<16){
    if(x%2===1){
        console.log(x);
    }    
    x++;
}

// Q5 PRINT THE MULTIPLICATION TABLE OF 5 (I.E 5 x 1=5 ...5 x 10 = 50)

for (let t=1; t<11; t++){
    console.log('5 * ${t} = ${5  t}');
}

// Q6 FIND THE SUM OF NUMEBRS FROM 1 TO 100 USING A LOOP

let sum=0;
  
for (let f=1; f<101; f++){
    sum = sum + f;
}

console.log(sum);

// Q7 PRINT ALL THE NUMBERS BETWEEN 1 TO 50 THAT ARE DIVISIBLE BY 3
for(let n=1; n<51; n++){
    if(n%3===0){
    console.log(n);
    }
}

// Q8 ASK THE USER FOR A NUMBER AND PRINT WHETHER EACH NUMBER FROM 1 TO THAT NUMBER IS EVEN OR ODD 

//(e.g "1 IS ODD","2 IS EVEN",....)

let val=prompt("give a number");

for(let m=1; m<=val; m++){
    if(m%2===0){
        console.log('${m} is even');
    }
    else{
        console.log('${m} is odd');

    }
   
}

// Q9 COUNT HOW MANY NUMBERS BETWEEN 1 TO 100 ARE DIVISIBLE BY BOTH 3 AND 5 

for(let l=1; l<101; l++){
    if(l%3===0 && l%5===0){
        console.log(l);
    }
}


// Q10 STOP AT FIRST MULTIPLES OF 7 

// WRITE A LOOP FROM 1 TO 100 THAT:

    //  PRINT EACH NUMBER
    // STOPS COMPLETELY WHEN ITS FINDS THE FIRST NUMBER DIVISIBLE BY 7

for(let r=1; r<101; r++){
     console.log(r);
    if(r%7===0){
        break;

    }
   
}

// Exepected output:
// 1 2 4 5 7 8 10 11...(no 3,6,9,etc.)
for (let o=1; o<21; o++){
    if(o%3===0) continue;
    console.log(o);
} 

let count=0;
for(let a=1; a<101; a++) {
    if(a%2 === 1){
        count++;
        console.log(i);
    }
    if (count === 5) break;   
}


