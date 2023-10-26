const descripter = Object.getOwnPropertyDescriptor(Math, "PI")   //this property give behind description of object which property are writable ,enumerable ,configurable 

// console.log(descripter);

// console.log(Math.PI);   //its const and not writable show we nod update that value 
// Math.PI = 5
// console.log(Math.PI);



const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));  //chai is object ,and name is property


Object.defineProperty(chai, 'name', {   //this methods we used changed getOwnPropertyDescriptor() methods value when we not used some property

    //writable: false,    //when its false we not changed value of that property
    enumerable: true,    //when its false we not set loop(iteartion on object)
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}