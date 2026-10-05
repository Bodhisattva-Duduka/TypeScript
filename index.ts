// const name: string = "Bodhisattva";
// console.log(`Hello, ${name}`);
// let age: number = 19;
// console.log(age);

// let isLoggedIn = false;
// console.log(isLoggedIn)

// let names: string[] = ["bodhi", "a", "b", "c"];
// console.log(names)


// let values: (string | number)[] = ["Bodhi", 20, "Hyderabad", 21];
// console.log(values)

// interface User {
//   name: string;
//   age: number;
// }

// // let value : string;

// // value = "bodhi";
// // console.log(value);
// // value = 2;
// // console.log(value);

// function logMessage(message: string) {
//   console.log(message);
// }

// logMessage("hi")

// // const users: User[] = [
// //   { name: "Alice", age: 20 },
// //   { name: "Bob", age: 22 }
// // ];

// // console.log(users)


// interface User {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   skills: string[];
// }

// const user: User = {
//   name: "Bodhi",
//   age: 20,
//   isAdmin: false,
//   skills: ["Java", "JavaScript", "TypeScript"]
// };

// console.log(user)

// let name : string = "bodhi";
// let age : number = 19;
// let isStudent : boolean = true;
// let skills : string[] = ["java", "javascript", "python"];

// let user: [string, number] = ["bodhi", 19];
// console.log(user);

// let data: unknown = "Hello TypeScript";

// // interface User {
// //   name : string,
// //   age : number
// // }

// type Status = "allowed" | "blocked";

// const requestType : Status = "blocked";


// type A = {
//   name : string
// }

// type B = {
//   age : number
// }

// const num : B = {
//   age : 23
// }

// type C = A & B;


// const values : C = {
//   name : "bodhi",
//   age : 23
// }



// interface User {
//   name: string;
//   age: number;
//   phone?: number;
// }

// const user1: User = {
//   name: "Bodhi",
//   age: 19,
// };

// const user2: User = {
//   name: "Bodhi",
//   age: 19,
//   phone: 9876543210
// };

// function printPhone(user: User) {
//   console.log(user.phone?.toString());
// }

// printPhone(user2);


// function greet(name : string , age?: number) : void {
//   console.log("hi " + name);
// }

// greet("bodhi");

// function greet(name?: string) {
//   console.log(name?.toUpperCase());
// }

// function createUser(
//   name: string,
//   age: number,
//   email: string
// ) {
//   console.log()
// }

// interface CreateUserInput {
//   name: string;
//   age: number;
//   email: string;
// }

// function createUser(data : CreateUserInput){
//   console.log(data.name);
//   console.log(data.age);
//   console.log(data.email);
// }

// createUser({name : "bodhi", age : 12 , email : "example@email.com"});

// let operation : (a : number , b : number ) => number;

// operation = (a,b) => {
//   return 2 + 3;
// }

// type MathOperation = (a: number, b: number) => number;

// const add : MathOperation = (a, b) => a + b;
// const multiply : MathOperation = (a,b) => a*b;

// console.log(add(2,2));
// console.log(multiply(2,5));


// function add(x : number, y : number ) :number {
//   return x + y;
// }

// console.log(add(3,6));

function greet(name : string, age?: number) : void{
  console.log(name);
  if(age){
    console.log(age);
  }
}

greet("bodhi");
greet("bodhi",19);

function greetUser(name: string = "bodhi"){
  console.log(name);
}

greetUser("Guest");

type MathOperation = (a: number, b:number) => number;

// const add : MathOperation = (a,b) => a+b;
// add(2,3);

function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);

interface User {
  name: string;
  age: number;
  phone?: number;
}

function printUser(data: User) : void{
  console.log(data.name);
  console.log(data.age);
  console.log(data.phone);
}

printUser({name :"bodhi", age : 19, phone : 3223});

async function getName() : Promise<string> {
  return "Bodhi";
}

console.log(await getName())