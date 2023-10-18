/*Here We Learn ControlFlow like if ,if else,Nested if else,switch */

//if --->

//syntax
//only run when condition are true otherwise not 


// if (condition) {   
    
// }

//comparison operator ---> <,>,<=,>=,!==,===,==

const temp= 41

if (temp<50) {
    // console.log("High temp");
}
// console.log("its outside if statement");



/*---->when we have contional checking state that time used if with else like syntax*/

// if (condition) {

//                //-->when condition are true
// }else{
//                //-->when if condition are false 
// }


/*---> when we have to check more than two condition at time that time used if else-if  */

//syntax of if-else-if

// if (condition) {
    
// } else if (condition) {
    
// } else{
    
// }

const balance =1000;

// if (balance<500) {
//    console.log("balance is less than 500"); 
// }else if (balance<750) {
//     console.log("balance is less than 750"); 
// }else if (balance<1100) {
//     console.log("your balance is less than 1100"); 

// }else{
//     console.log("your balance is less than "); 

// }



/*Example ----->*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}