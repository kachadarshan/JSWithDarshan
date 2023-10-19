/*Which loop work for iterate object --> for in loop */

const myyd = {
 js:"javascript",
 ruby:"Ruby rails",
 sw:"swift"
}

const myarr =["js","cpp","rb","java","swift"]

for (const [key,value] in myarr) {

   console.log(key);
}