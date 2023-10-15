/*Second Part Of Arrays Basics and Methods */

const marvel_hero =["thor","iron","shaktiman"]
const dc_hero=["superman","flash","batman"]

//Push -->
// marvel_hero.push(dc_hero)  //its add marvel_heros array last index as elemnet
// console.log(marvel_hero);

//concat --->
// for more look mdn document

//when arry contact anothe array its work same as push work in array 
// marvel_hero.concat(dc_hero)
// console.log(marvel_hero);

//spread -->
// combined two array in one array and give new array

const myallhero= [...marvel_hero,...dc_hero]
// console.log(myallhero)


//flat -->
//its used when array have another in inside to make s single array 

const flatdemoarry=[1,2,3,[4,5,6],0,[1,2,[4,5]]]   //of add all array in one used flat methods
 const resultflat = flatdemoarry.flat(Infinity);
//  console.log(resultflat);



//Array --> for more look mdn 
   //isArray
   //from
   