/* Numbers of Java Script */

const numone = 100   //its defind number but not defined type 

//Number we used create object of number  like

const numtwo = new Number(150);
// console.log(numtwo.toString().length)
// console.log(numtwo.toFixed(5))



/*Precision */
const othernum = 24.891
// console.log(othernum.toPrecision()) 

/*Localestring used */
const numlocale = 150000
// console.log(numlocale.toLocaleString('en-IN')) //here in bracekt is code for india number in javascript


/*--------------++++++++++++++    Maths     ++++++++++++++++-----------*/

console.log(Math)
// console.log(Math.abs(-4));            //its give absoulately value 
// console.log(Math.round(4.5))          // its give round value 
// console.log(Math.ceil(4.5))           // its give round value but upperside        
// console.log(Math.floor(4.5))          // its give round value but lowerside     
// console.log(Math.min(1,2,8,9,0))      // its find min value of given number 
// console.log(Math.max(0,1,2,9))        // its find max value of given number 

/*Most Used Math Function In random */

// console.log(Math.random())         //its always give value between 0 to 1
                                   //when you need value 0to 9 multiply 10


 /* Formula for generating Random value */

 //This Example For Dice Game generate random number between 0 to 6
 const min =0
 const max =6
 
 console.log(Math.floor(Math.random() *(max -min +1))+min);

