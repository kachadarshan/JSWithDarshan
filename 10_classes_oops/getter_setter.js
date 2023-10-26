class User{

    constructor(email,password){
        this.email =email;
        this.password=password;
    }

    //in getter setter methods give protection of our codes its methods created by same name of our constructor parameter 
    get email(){
        return this._email.toUpperCase()    //in method we need to use new property of emial
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Darshan`  //in method we need to use new property of password 
    }

    set password(value){
        this._password = value
    }

}


const Darshan =new User('dk@meta.gmail','123456');
console.log(Darshan.password);