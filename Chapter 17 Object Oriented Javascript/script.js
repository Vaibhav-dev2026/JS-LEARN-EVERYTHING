// function CreateBiscuits(name,price,qty,company,category){
//     this.name=name;
//     this.price=price;
//     this.qty=qty;
//     this.company=company;
//     this.category=category;
// }

// let biscuit1=new CreateBiscuits("Oreo",10,5,"Cadbury","choclate");
// let biscuit2=new CreateBiscuits("Fantasy",20,3,"Parle","choclate");

// // hume seekhna hai factories banana matlab ki aap ek baar blueprint bana do ki har object kaisa dikhega and hum log naye naye objects with different values bana paayega yahi upar upar se poora kaam hai oops mein

// function CreatePencil(name,price,color,company){
//     this.name=name;
//     this.price=price;
//     this.color=color;
//     this.company=company;
//     this.write=function(text){
//         document.body.append(document.createElement("h1"));
//         // h1.textContent="Hey How are yoy bro?"
//         h1.textContent=text;
//         h1.style.color="black";
//         document.body.append(h1);
//     };
// }

// let pencil1= new CreatePencil("Nataraj",10,"black","nataraj");
// let pencil2= new CreatePencil("Doms",11,"white","doms");

// // agar tumhaara constructor function koi field apne prototype attach kar le to us constructor se banne waale sabhi new instances yaani ki objects ke pass wo field automatically chali jaati hai 

// function CreatePencila(name,price,color,company){
//     this.name=name;
//     this.price=price;
//     this.color=color;
//     this.company=company;
//     this.write=function(text){
//         document.body.append(document.createElement("h1"));
//         // h1.textContent="Hey How are you bro?"
//         h1.textContent=this.text;
//         h1.style.color="black";
//         document.body.append(h1);
//     };
// };

// CreatePencila.prototype.company="sheryians";

// let pencil10= new CreatePencila("Nataraj",10,"black","nataraj");
// let pencil20= new CreatePencila("Doms",11,"white","doms");

// class CreatePencil{
//     constructor(name,company,price,color){
//         this.name=name;
//         this.company=company;
//         this.price=price;
//         this.color=color;

//     }
//     erase(){
//         document.querySelectorAll("h1").forEach(function(elem){
//             if(elem.style.color===this.color){
//                 elem.remove();
//             }
//         });
//     }
//     write(text){
//         let h1=document.createElement("h1");
//         h1.textContent=text;
//         h1.style.color=this.color;
//     }
// }

// let p1=new CreatePencil("nataraj","nataraj",10,"black");
// let p2=new CreatePencil("apsara","apsara",15,"black");

class user{
    constructor(name,address,username,email,role){
        this.name=name;
        this.address=address;
        this.username=username;
        this.email=email;
        this.role=role;
    }

    checkRole(){
        return `you are a ${this.role}`
    }
    write(text){
        let h1=document.createElement("h1");
        h1.textContent=`${this.name}:${text}`;
        document.body.appendChild(h1);
    }
}

class admin extends user{
    constructor(name,address,username,email){
        super(name,address,username,email);

    }
    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();

        })
    }
}

let u1 = new user("ram","bhopal","async123","hey@hey.com");
let u2 = new user("shyam","bhopal","async1234","hey1@hey.com");
let a1=new admin("admin1","india","adminnnn","a@a.a");



// CLASSICAL INHERITANCE -java cpp 
// -->classes bannana and unko extend kr dena 

// inheritance-class->>class

// PROTYPAL INHERITANCE -object ->object in js 

let coffe={
    color:"dark",
    drink:function(){
        console.log("gut");
    },
};
let arabiatacoffee=Object.create(coffe);
console.log(arabiatacoffee);

arabiatacoffee.taste="bitter";
arabiatacoffee.drink();

// ek object hai aap chhao uski saari value props/method ko inherit ar dete ho doosre object mein
