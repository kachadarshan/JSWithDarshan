/*inheritance in javascript  */


class User{

    constructor(username){
        this.username=username;

    }
}


//inheritance using extends keyword 

class Teacher extends User{

    constructor(username,email,password){
        super(username)    //this called his parent class constructor 
        this.email =email;
        this.password=password;
    }

    addCoursee(){

        console.log(`${this.username} Added Javascript in his knowledge wisdom`);
    }
}

const chai = new Teacher('Darshan Kacha','kacha@meta.com','12345');
chai.addCoursee();
