// let x : number = 1394;
// const y : string = "Vinay";
// console.log(x,y);

// const z : any = 10;

// function greet (firstName : string, lastName : string, age : number) {
//     console.log("Hello " + firstName)
// }

// greet("Vinay", "Dharmesh", 10);
// greet("Patel", "Vinay", 10);


// // type inference
// function sum (a :number, b: number) {
//     return a+b;
// }

// function isLegal (age : number) : boolean {
//     return age >= 18 ? true : false
// }

// let patel = isLegal(21);
// let vinay = isLegal(19);

// let ans : number = sum(10,382);
// console.log("🚀 ~ ans:", ans)



// function time (a: () => void) {
//     setTimeout(a,1000)
// }


// time(function a () {
//     console.log("setTimeout")
// })

// const a = (name) => {console.log(`hi my name is ${name}`)}

// Interfaces

interface User {
    firstName : string;
    lastName : string;
    email : string;
    age : number
}

function isLegal (user : User) : boolean {
  return user.age > 18; 
}   

console.log(isLegal({
    firstName : "Vinay",
    lastName :"Gupta",
    email : "vinay@gmail",
    age : 20
}))


type Employee = {
    name: string;
    startDate: Date;
  };
  
type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager & User;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer",
    firstName : "vinay",
    lastName : "gupta",
    age : 22,
    email : "vlskdjf"
  };
  console.log("🚀 ~ teamLead:", teamLead)



  interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "ujjjwala",
    lastName: "Singh",
    email : "jedj",
    age: 21
}, {
    firstName: "haji",
    lastName: "Singh",
    email : "skjdnc",
    age: 16
}, ]));


// Enums

type keyInput = 'up' | 'down' | 'left' | 'right'

enum keyPressed {
  // up = "up",
  // down ="down",
  // left ="left",
  // right = "right"
  up = 10,
  down = 100,
  left ,
  right = "rihjt"
}

function doSomething (key : keyPressed) : string {
   if(key === keyPressed.up){
        
   }
   return "";
}

doSomething(keyPressed.up)
console.log(keyPressed.up)
console.log(keyPressed.down)
console.log(keyPressed.left)
console.log(keyPressed.right)


// Generics
type input = string | number

function identity <T> (arg : T){
  return arg;
}

// const val = firstElement([1,"Vinay"])
// console.log(val.toUpperCase())


const val1 = identity<number>(100);
const val2 = identity<string>("100");

function firstElement <T>( arg : T[] ) {
            return arg[0];
}

const val3 = firstElement<number>([1,2,4,5])
const val4 = firstElement(["vinay","kumar","gupta"])
val4.toUpperCase()
console.log("🚀 ~ val4:", val4)


interface Users {
  name  : string;
  age : number;
  email : string;
  fullName : string;
  otp : number
}

type Users1 = {
  name  : string;
  age : number;
  email : string;
  fullName : string;
  otp : number
}

// function sumOfAge (user1 : Users , user2 : Users) {
//       return user1.age + user2.age;
// }

// const res = sumOfAge({name : "Vinay", age : 24}, {name : "Kumar", age : 25});
// console.log("🚀 ~ res:", res)

// type updatedProps =  Pick<Users , 'age' | 'email' | 'otp'>
type updatedProps =  Pick<Users1 , 'age' | 'email' | 'otp'>
type updatedPropsPartial = Partial<updatedProps>

function updateUser (props : updatedPropsPartial) {
        return props.otp
}

const res = updateUser({});
console.log("🚀 ~ res:", res)


type config =  {
   endPoint : string;
   apiKey : string;
}

const auth : Readonly <config>  = {
  endPoint : "sdfghjk",
  apiKey : "dtfyguhjk"
}

// auth.endPoint = "jkhvkafs";

