/*Objects in javascript its most Important in javascript     */

// when object make using consutructor is singltone


//Objects Literals
// const objname ={value of object}   //object write in curly braces its have key,value pair key:value,

const mysymbol1 = Symbol("key1")

const jsuser={ name:"Darshan",
  age:25,
  "location":"surat",
  [mysymbol1]:"Key1",               //this is the right technic to define symbol in object value 
  email:"darshan.google@gmail.com",
  logeedin:"yes"
}

//how to print property of objects --> (.) used this dotmethod and [" "] this method 
                                // --> but key value have string datatypes use this method [" "]  
                                
// console.log(jsuser.age);    
// console.log(jsuser.email);
// console.log(jsuser.location);
// console.log(jsuser[mysymbol1]);     //always symbol key give in [] in the braces this the right way doing this 


/*How to Change value of Objects  -------*/

jsuser.email="google@gmai.com"  //this simply override value in object 

/*lock the value means no body can change value use freeze exp */
Object.freeze(jsuser)     //this is the freeze object means value not the change or override
jsuser.name="Dax Kacha"    

console.log(jsuser);