/*Here we learn Reduce Method  */

//its most use in shoping website in cart function

const number=[1,2,3,4,5]

//how to write reduce in function  --its return value so we store this into one varible

const valuesfreduce = number.reduce( function(acc,cvalue){
    // console.log(`this is acc:${acc} // this is currvalue:${cvalue}`); 
    return acc+ cvalue
},0)

// console.log(valuesfreduce);

//--> reduce method used arrow function 

const valarrofreduce = number.reduce( (acc,cvalue) =>
{
        // console.log(`this is acc:${acc} // this is currvalue:${cvalue}`); 
    return acc+cvalue
} ,10)   //here ,give value in intialization valu of reduce method

// console.log(valarrofreduce);



//shoping cart example 
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) 
console.log(priceToPay);