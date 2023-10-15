/*Here We learn Dates  */

const myDate =new Date()    //this created object of Date
// console.log(myDate) 
// console.log(myDate.toDateString())       //its give value Sun MM/DD/YYYY
// console.log(myDate.toJSON()) 
// console.log(myDate.toLocaleString())     //its give perfect date and time MM/DD/YYYY Time format
// console.log(myDate.toLocaleDateString()) //its give only Date format MM/DD/YYYY


/*we have created our date giving paramater in date */

let mycreatedate =new Date(2023,0,15)
// console.log(mycreatedate.toLocaleString())


/*---------- -- Timestamp in date --------------- */
 
// its used most when you required perfetc timing of any work
// use in game,booking website 

let Mytimestamp =Date.now() //The Date.now() static method returns the number of milliseconds
// console.log(Mytimestamp)
// console.log(mycreatedate.getTime())     //its give time value in miliseconds 
// console.log(myDate.getTime()/1000)      //its convert millisecond to seconds (But its give decimal num)

// console.log(Math.floor(myDate.getTime()/1000)) //its remove decimal num on millisecond and give lower value


/* When You want specific Day , Week day ,Month , Year */
let myNesDate =new Date()
// console.log(myNesDate.getDay())
// console.log(myNesDate.getMonth()+1)
// console.log(myNesDate.getFullYear())

//.Localstring use to find Weekday , Timezone and like many methods 

