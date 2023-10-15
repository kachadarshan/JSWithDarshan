//String Write in "string" is best practice in js 

const str1="Darshan Kacha"
// console.log(str1)

//How to continate two string
let str2 ="Darshan"
let str3 =" Kacha"

let str4=str2+str3 //here + sign used continate two string
// console.log(str4)


/*modern day used for string continate is backstack'' here we used plaeholder using this ${write your value} */
 // console.log(`Hello My Name is ${str2} and my surname is ${str3}`)

/* this is the second type to difined string  */
const newstr=new String('My Name is Darshan kacha')

// console.log(newstr.charAt(15)) //give 15 position value 
// console.log(newstr.indexOf('m')) //give index position

let newstrdivide =newstr.substring(0,8)  //use to divide or substring of string giving range of number 
// console.log(newstrdivide)

let strslice =newstr.slice(-2,4)
console.log(strslice)

/*when Dont Required Extra space in string  use .trim()*/

//    console.log("   Darshan kacha".trim()) //remove extra spaces


/*when you want to replace something in string used .replace() method  */
