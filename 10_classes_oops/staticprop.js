/*Static keywoerd in javascript */

class User {
    constructor(username){
        this.username = username
    }

    logMe(){                 //this is the default method to used in js 
        console.log(`Username: ${this.username}`);
    }

    static createId(){          //this static keyword not give access its child class ao access this method 
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());  //here we not used creatId method beacuse its static so its not allowed to use out of the class or its child class