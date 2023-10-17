/*Function in JavaScript  */

//write function using function keyword

//here myuser --> is name of function { body } in curely braces write function body

function myuser(){              
    console.log("D");
    console.log("K");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("A");
    
    }
    
    //---->how to call function
    // myuser()                     //--> this call function
    // myuser                       //-->this is the refrence of function
    
    
    //---->example of function
    
    // function AddTwonum(number1,number2){             //here number1,2 called parameters
        
    //     console.log(number1+number2);
    // }
    
    // AddTwonum(4,5)                                    //here value called arguments
    
    
    //----->in this example show How to store return value in variable
    function AddTwonum(number1,number2){            
        
        let result =number1+number2
        return result;
    }
    
    const results =AddTwonum(4,5)
    console.log("dd");
    console.log(results);   