/*Here We learn For Loop (iteration) */

//--->syntax of For Loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];   
// }

for (let index = 0; index < 10; index++) {
const element =index;

if (element ===5) {
    // console.log(`${element}, is the best number`);
}
    // console.log(element);    

}

// console.log(element);  //here we not used element beacause element have in scope of for loop

//---> Loop s inside another loop 

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}


//---> How array works in Loop 
let Myarray =["Darshan","Jay","Ravi"]
// console.log(Myarray.length);    //this is give the length of array

for (let i = 0; i < Myarray.length; i++) {
    const element = Myarray[i];
    // console.log(element);
    
}


//---> How to Stop Loop in some conditions 

// here used break and continue keywords manage loop on some conditions 


//---> break --> when condition detect break its stop loop working

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }


//---> continue --> when condition detect continue its give one condition and continue program
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}