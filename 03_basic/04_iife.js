/* immediately invoked function expression    */ 

//its syntax is write function () and put last (); to call this function

//its immediate executed and used to remove global scope polution

( (num1,num2) => {
    console.log("Kacha");
   
    console.log( num1+num2);

}) (4,5);

