/*Learn Array On Basic for js */

// Array format  const arrayname =[ array value same datatype or differnet data types are allow in javascript]

const myarry =["Darshan","Mahesh","Uday","Ajay","Kishor","Pankaj","Sanjay"]
// console.log(myarry);
// console.log(myarry.length)
// console.log(myarry.concat("Kacha","navada"))

const secarray=[1,2,"Darshan","Kacha","Navada"]  //combined data types array like string & Number data types 
// console.log(secarray);

/*--------- -------- Arry Methods --------------- ------  */

const arrthree =[1,2,3,4,5,6,7,8]

//Push --> used Add data on Existing Array
arrthree.push(8)
// console.log(arrthree);

//Pop --> its removed last index value of array 
arrthree.pop()
// console.log(arrthree)

//Unshift -->add value of 0th index
//shift   --> Remove value of added by unshift


//includes(value) --> this is your array have that value or not and give o/p of boolean types 

//indexof(value)  --> if array have that index so give index value as result otherwise give o/p is -1

// .join()  --> change types of arry in string data types 

const nqarry =arrthree.join()
// console.log(nqarry)
// console.log(typeof nqarry)


// Slice And Splice Methods 

//slice -->

const myna1 =arrthree.slice(1,4) //its give index 1 to 3 value not include last index of arguments , and not manipulate our array
// console.log("A",arrthree);
// console.log(myna1);

//splice  -->
const myna2 =arrthree.splice(1,4) //its give index 1 to 4 value , and manipulate our existing array
// console.log("B",arrthree);
// console.log(myna2);


