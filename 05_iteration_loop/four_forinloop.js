/*For in loop  */

//in object used for in loop

const Myobjj = {

    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift",
    java:"java"

}

for (const key in Myobjj) {
//  console.log(Myobjj[key]);   
}

//----> for in loop in array 

const Myarray=["js","cpp","rb","swift","java"]

for (const value in Myarray) {
    console.log(`this is the value of array ${Myarray[value]}`);
}