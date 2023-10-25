function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername(this, username)   //this not set username this is not working 
    SetUsername.call(this, username)  //here .call methods is explicit called the setUsername methods and set username its hold refrence of the methods 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);