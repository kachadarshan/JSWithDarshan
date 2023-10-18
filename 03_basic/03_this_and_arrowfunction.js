/*Here we learn this and arrow function */

//--->this refer current contex 

const user ={
    username:"Darshan Kacha",
    price:999,

    welcomemesseage: function(){
        console.log(`${this.username}, is logged in...`);
        console.log(this);  //here thie represent current context of object
    }

    }

// user.welcomemesseage()

// console.log(this);   //here this represen global context


//---->this in function

function chai(){
    let user="Darshan"
    console.log(this.user);  //in function method this not refer current context
}

// chai()

/*+++++++ ------- Arrow Function ------- +++++++*/

//how to create Arrow function --> simple replaced function key word with this form ( => ) this symbol is arrow function ex 

const myuser = ()=>{
    console.log("This Is Arrow Function");
}

// myuser()

//----------------------this is simple arrow function


const AddTwonum =(num1,num2) =>{    //here AddTwonum is variable its holds arrow function

return num1+num2
}
// console.log(AddTwonum(5,5));


//----> Implicit Arrow Functino here not need { } and return this used in react

const Addn =(nu1,nu2) => (nu1+nu2)
// console.log(Addn(4,5));

