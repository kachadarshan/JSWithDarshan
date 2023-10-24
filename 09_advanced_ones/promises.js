/*Here We learn Promises And Use of promises  */
 
//defination of promise --> something happend in future 

//--->create promises

const promone = new Promise(function(resolve,reject){
    //used of promises --> Db calls, Netwokcalls, Cryptography
    //Do async task 

    setTimeout(function(){
        // console.log('Its Promises One ');
        resolve();                       //this methdo consumed current promises 
    },1000)

});


//--->promise consumption 

promone.then(function(){            //here .then ahve relation with resolve method 
    // console.log('promises consumed');

});


//--->in single code promise created and consumed 
new Promise(function(resolve,reject){

    setTimeout(function(){
        // console.log('Async task 2');
        resolve();
    })
}).then(function(){

    // console.log('Async 2 cosnsumption');
});


//---> How to pass value promise to .then method 

const promiseeThree =new Promise(function(resolve,reject){

    setTimeout(function(){

        resolve({username: "Chai", email: "chai@example.com"});

    });
})

promiseeThree.then(function(user){
console.log(user);
});


//--->>when error occured in promise that scenario 

const promiseFour =new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = true;
    if (!error) {
        resolve({username: "hitesh", password: "123"})
    }else{
        reject('ERROR: Something went wrong')
    }

    },1000);

});

//.catch method is four error 
//.finally method is for when promise not complete properly

//--> here we have to used many .then and .cath method its called chaining in promisies 
// --> .then methods return valued to second .then methods 

promiseFour
.then((user) => {
   console.log(user);
   return user.username
})
.then((username) => {
   console.log(username);
})
.catch(function(error){
   console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected")); //its like a default methdos 



//----> Fifth Promise  -using asny and await to replace .then and .catch methods for response and error 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//-> here we used ASYNC AWAIT Method on >.then and .catch methdos ->aysnc wait for some time to that work completed 
// async have one probleam its not handle error directly so used Try-catch block 

async function consumePromiseFive(){
    try {
        const response = await promiseFive  //this await connect promise like .then connected  
                                            // try -catch blocked used mostly when DB Connection required to connect                            
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()  //this fuction called of asnyc function 


//---> Small example of fetch how work 

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all

//---->>till knowledege you are ready to start a reajs ,react native 