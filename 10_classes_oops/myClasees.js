/*oops clasees in javascript */

//-->syntax of class 
// class User{   --> here user is name of class 

// }

//--> in class we need constructor compulsory 

class User{

    constructor(username, email, password){  //this constructor is complusory
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){    //its encrypted password is default methods in js 
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//----> before class introduce in js 

// how upper code will work behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());