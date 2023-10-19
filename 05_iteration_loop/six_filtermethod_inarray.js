/*here we learn filter method in array */

const coding =["js","java","ruby","swift","python"]

//here we check foreach value retrun any value or not so save this loop in variable
const valcss =coding.forEach( (iteam) => {
    // console.log(iteam);
    return iteam
})

// console.log(typeof valcss);  //so foreach loop not return any value 


//---> .filter method -- return value 
const Mynum =[1,2,3,4,5,6,7,8,9,10]


const newNums = Mynum.filter( (num) => 
{
    return num > 4  //here we have in scopr so need to write return keyword
} )


//---> for each loop used  

const newNumss = []

Mynum.forEach( (num) => {
    if (num > 4) {
        newNumss.push(num)  //here push method used add value in array
    }
} )

// console.log(newNums);


//Example of filter method 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')  //here we have not used { scope} in funtcion that why not write return 

  userBooks = books.filter( (bk) => {   //here we have used {scope } in funtcion that why write return keyword for value retrun
    return bk.publish >= 1995 && bk.genre === "History" 
})


// console.log(userBooks);