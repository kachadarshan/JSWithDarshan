/*Create Object Using Constructor or Singleone*/
// const tinderuser =new Object()             //this is singltone

const tinderuser={}

tinderuser.id =123
tinderuser.name ="Darshan"
tinderuser.city= "Junagadh"

// console.log(tinderuser);

//nested object example 
const regularuser ={
email: "darshan.google@gamil.com",
fullName:{
    useFullName:{
        UserFname:"Darshan",
        Userlname:"KAcha"
    }

}

}

// console.log(regularuser.fullName.useFullName.UserFname);  //when Some property not exsisting that time used 
                                                          //--> Optinal chaine


/*Combined Two Object -------> .assign method used  */                                                          

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3 ={obj1,obj2}   //this not a right way to combine 

const obj3 =Object.assign({},obj1,obj2)  //here {} work as target and obj value work as source
// console.log(obj3);

/*Combined Two Object -------> using Spread method  mostly used */                                                          
const obj4={...obj1,...obj2}
// console.log(obj4);


/*When value come in DATABASE in form of array object like json [{ vaue }] */
const userinfo=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    },
]

// console.log(userinfo[0].email);

/*When Required only Keys And Values How to find Using Object method is most used in big Project  */

// console.log(Object.keys(tinderuser));   //its gives keys of tinder user in arrayform 
// console.log(Object.values(tinderuser)); //its gives values of tinder user in arrayform


/*Destructuring in Objects  -->Its Help To Reduce code or provide redebility */
const course={

    coursename:"js in hindi",
    coursepricce:"999",
    courseinstructor:"Hitesh "
}

//when you used many time this object that time help reduce code 
const {courseinstructor} =course;
// console.log(courseinstructor);


/*API --> Application Programming Interface --its returen type is json*/

