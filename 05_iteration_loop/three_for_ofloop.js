/*Here we learn for of loop -->its array based loop */

//syntax of for of loop -->in this no need define any variable or no increment 

// for (const iterator of object) {
    
// }

// const myArray=[1,2,3,4,5,6,7,8,9]
const myArray="hello world"

for (const iterator of myArray) {
    // console.log(`value of that position ${iterator}`);
}


//Maps --->------ its known for unique value its not store same value //working same as arraylist 
// map.set  method used store data


const map =new Map()
map.set("A",1)
map.set("B",2)
map.set("C",3)
map.set("D",1)    //map not stored same value 

// console.log(map);

//when you have value in KEY AND VALUE Form used [key,value] this type of syntax in loop 
//simply called array distructure

for (const [key,value] of map) {
    // console.log(value);
}


//----> for of loop in object --> its not iterable in for of loop

const Myobj ={
    userName:"Darshan",
    userNumber:8780098183,
    userGmail:"darshan.softag@gmail.com",
    userCity:"Junagadh"
}

for (const key of objkey) {
    // console.log(`this the value ${key}`);
}