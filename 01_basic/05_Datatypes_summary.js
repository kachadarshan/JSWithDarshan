/* Premitive Data Types  */

// 7 Types of Premitive Data Types 
// String, Number, Boolean, Null, Undefined, Symobol(used to make value Unique), Bigint

const value1 =100; //Number 
const value2 =10.25 //Here not FLoat ,Double everything is number 

const isLoggedin = true //its Boolean type

//use of Symbol
const id ="123"
const userID ="123"

//in symbol when two value are same in but that result are diffent or unique come 

console.log(id === userID); 





/* Refrence(Non Premitive) Data Types */

// Array, Objects, Functions

//arry
const hero=["Shaktiman","Nagraj","Doga"];

//object write in { object} , and its write in KEY:VALUE pare 
let myobj =
{
    first_name:"Darshan Kacha",
    age : 25,
    mobile_number : 8780098183
}

//Function write used function(){ }

let myFunction= function(){
    console.log("Its Functionl Tutorial")
}


//typeof used Difine Data Types of parameter we have used 

/* ----------------------MEMORY----------------------------------------------------------------*/
// Two Types have

// Stack Memory --> used for premitive data types (Give Copy of value)

// Heap Memory --> used for non premitive data types (Give Refrenation)


