// module pattern

// module pattern ek design pattern hai jisme hum apne code ek self executing function (IIFE) ke andar likhte hai taki variables aur functions private rahen

// iske andar se hum sirf wahi chezzein return karte hai jo bahar use karni hai 

// is pattern ka main fayda hai data hiding (encapsulation) aur clean structure taaki code secure ,reusable aur manageable ban sake.

let fnc=function(){
    return 12;
}();

// module pattern
// iife
let fnc1=(function(){
    let bankbalance=12000;

    function checkbalance(){
        console.log("bankbalance");
    }

    function withdraw(val){
        if(val<=bankbalance){
            bankbalance-=val;
            console.log(bankbalance);

        }
    }
    return{
        check:checkbalance,
        set:setbalance,
        draw:withdraw,
    }
});

bank.check();


// module pattern main jo bhi banoge iife ke andar banaoge vo private ho jata hai iife ke andar se aapko return karna hota hai bhai isliye bankbalance direct access nahi karwana hai iskliey main bahar nahi likha hun


// FACTORY FUNCTION PATTERN 
// ek function banate ho jo objects craete karta hai (factory=object banane ki machine)

// factory function pattern ek aisa design pattern hai jisme hum ek simpla efunction likhte hain jo naye objects banakar return karta hai ,bina class ya new keyword use kiye ..

// is pattern ko main idea hai -object creation ko ek function ke through control karna 

// har baar jab tum factory function call karte ho ,tumhe ek naya object milta hai jsime apne methods aur (agar chaho to) private data ho sakta hai ...

// yeh pattern specially useful hai jab tumhe ek hi type ke baut saare objects chaiye jaise users,products,tasks,etc
// factory function pattern
function createproduct(name,price){
    let stock=10;
    return{
        name,
        price,
        checkstock(){
            console.log(stock);
        },
        buy(qty){
            if(qty<=stock){
                stock-=qty;
                console.log(`booked-${stock} pieces left`);
                
            }
            else{
                console.error("We have dont have these pieces")
            }

        },
        refill(qty){
            stock+=qty;
            console.log(`refilled the stock-${stock} pieces left now`);
        },
    };


}
// createproduct("iphone",70000);
// iphone.buy(6);

let iphone=createproduct("iphone",70000);
let kitkat=createproduct("kitkat",70000);



// har baar jab create product ko chaloge tab ek naya object banake dega hum ise without constructor aur classes ke maddade ke banta hai  isliye hum ise factory design pattern kahta hai

class YoutubeChannel{
    constructor(){
        this.subscriber=[];

    }
    subscribe(user){
        this.subscriber.push(user);
        user.update(`${user.name} you have subscribed the channel`)
    }
    unsubscribe(user){
        this.subscriber=this.subscribe.filter((sub)=>sub!==user);
        user.update(`you have unsubscribed the channel`)
    }
    notify(){
        this.subscriber.forEach(sub=>sub.update(message));
    }


}
class user{
    constructor(name){
        this.name=name;
    }
    update(data){
        console.log(`${this.name},#{data}`);
    }
}
let sheryians=new YoutubeChannel();
let user1=new user("ram");

sheryians.subscribe(user1);
sheryians.subscribe(user2);
sheryians.notify("new video uploaded...");




