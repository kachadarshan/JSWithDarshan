/*Here we have to create a methdo truelength name to remove extra spaces of any string */

let myName = "Darshan     "
// let mychannel = "chai     "

console.log(myName.length);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//this is give new property of Object 
Object.prototype.Darshan = function(){
    console.log(`Darshan is present in all objects`);
}

//this is give new property to Array methods 
Array.prototype.heyDarshan = function(){
    console.log(`Darshan says hello`);
}

// heroPower.Darshan()
// myHeros.Darshan()    //--> My hero is array but when array call its cross object so we used object property in array 
// myHeros.heyDarshan();
// heroPower.heyDarshan() //--> when we give property in array that not used Object



/*INHERITANCE in js --------- */

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User    //__proto__ methods used to give inhertance here teacher methods inherit user methods property


//-----> modern syntax(ES6) of inheritance
Object.setPrototypeOf(TeachingSupport, Teacher) //here TeachingSupport inhertit Teacher



let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()
// "Darshan".trueLength()
// "iceTea".trueLength()