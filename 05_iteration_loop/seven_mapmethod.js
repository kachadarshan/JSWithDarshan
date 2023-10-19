/*here we learn map and filter and chaining method  */

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNums = myNumers.map( (num) => { return num + 10})
// console.log(newNums);


//--> this example using for each method its not return any value 

const myfn2=[]
const mfnumexp = myNumers.forEach( (num) =>{

    const mnum =num+10
    myfn2.push(mnum)

})
// console.log(myfn2);


//---> Chaining Method  -- where we have used more than one method 

const newNuums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNuums);                