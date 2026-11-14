// if else else if 
// switch case
// early return pattern

// if(condition-> T || F)

// if(loggedin) {

// }
// else{

// }

// if(12>17)) {

// }
// else{

// }

// if(loggedin && admin){

// }
// else if(loggedin){


// }
// else{

// }


// switch

// switch(3){
//     case 1:
//         break;
//     case 2:
//         break; 
//     case 3:
//         console.log("hey");
//         break;
//     default:
// }

// early retuen pattern

// function getval(val){
//     if(val<100) return "A";
//     else if(val<75) return "B";
//     else if(val<50) return "C";
//     else return "D";
// }

// getval(89);

function getgrade(score){
    if(score>=90 && score <= 100){
        return "A"; 
    }
    else if(score>=80 && score <=89){
        return "B";
    }
    else if(score>=70 && score<=79){
        return "C";
    }
    else if(score>=60 && score<=69){
        return "D";

    }
    else if(score>=33 && score<=59){
        return "E";
    }
    else if(score>=0 && score<=32){
        return "Fail";
    }

    else{
        return "Invalid Marks";
    }

}

console.log(getgrade(78));

// ROCK-PAPER-SCISSORS LOGIC  

function rps(user,computer){
    if(user === "rock" && computer === "scissor")
        return "user";
    if(user=="scissor" && computer === "rock")
        return "computer";
    if(user=="paper" && computer === "rock")
        return "user";
    if(user=="rock" && computer === "scissor")
        return "user";
    if(user=="scissor" && computer === "paper")
        return "user";
    if(user=="paper" && computer === "scissor")
        return "computer";
}

rps("rock","scissor");