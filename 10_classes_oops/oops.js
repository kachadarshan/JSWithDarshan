//---> Object Literals
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }


    //--> This keyword is used for cureent context

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


//---> Constructor Function
//-> when we have many details to send on data structure that time used constructor methods 

function User(username, loginCount, isLoggedIn){
    //varibles    = Passedvalue in fuction
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

//--->  When we used NEW keyword 
    //1- its create empty object its called instance
    //2- constructor function called 
    //3- its give value in this.varibales 
    //4- its give value 


/*Self Learning Topics -- instance of method  */    