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
    // console.log(val1)
}

// console.log(val1);



/*------ Nested Scope ---------- */

function one(){

    const username ="Darshan"

    function two(){         //when nested function happen child used parent property 

        const usercity ="Junagadh"
        console.log(username)
    }

    // console.log(usercity);

    two()
}
one()



/* ====++++==== Intresting  ====++++==== */


//this style define console.log before function define working fine 
console.log(addone(5))

function addone(num){
    return num + 1
}



//here we store function in variables so we need always define variable first otherwise it show error 
//simply its Hoisting

addTwo(5)
const addTwo = function(num){
    return num + 2
}