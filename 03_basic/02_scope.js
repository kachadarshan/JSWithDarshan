/* Scopes in JS  */
//--> its has two type 
    //Local Scope -->value under of {}
    //global scope --> its write outer of {}

    
//-->defination of scope 

//value of between { scope } called scope except Object 

let val1 ="10"
const val2="25"

if(true){        //-->value inside of curly braces called Local Scope and outer of {} called global scope 

    let val1 ="101"
    const val2="25"
    console.log(val1)
}

console.log(val1);