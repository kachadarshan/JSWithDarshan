/*here we write logic of click event of button and change the background color  */
console.log();

const box = document.querySelectorAll(".myboxspan")
const body=document.querySelector("body")

box.forEach(function(button){

    button.addEventListener("click",function (e) {

        const id=e.target.id
        switch (id) {
            case "white":
                body.style.backgroundColor = id;
                break;
            
            case "grey":
                body.style.backgroundColor = id;
                break;
        
            case "blue":
                body.style.backgroundColor = id;
                break;
        
            case "orange":
                body.style.backgroundColor = id;
                break;
        
            default:
                break;
        }
        

    })

})