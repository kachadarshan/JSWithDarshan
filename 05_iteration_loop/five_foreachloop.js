/*For each loop in javascript ---> in array its default set as property */


const coding =["js","java","ruby","swift","python"]

//--->this is foreach loop using simple function
coding.forEach( function (iteam){
// console.log(iteam);
})


//--->this is foreach loop using simple arrowfunction
coding.forEach( (iteam) =>{
    // console.log(`this is arrow function value ==> ${iteam}`);
})


//---> decalre function outside and give its refrence in foreach loop
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)


coding.forEach( (item, index, arr)=> {  //for each give many parameter 
    // console.log(item, index, arr);
} )


//---> when we have objects in side array //+++ Json Response always come this format its most usefull

const Mycoding =[
  
 {
        lanname:"Javascript",
        lanfile:".js"
 },
 {
    lanname:"Java",
    lanfile:".java"
 },
 {
    lanname:"Python",
    lanfile:".py"
 }

]

//for each loop easly acces thsi complx form

Mycoding.forEach( (iteam) =>{

    console.log(iteam.lanname);
})