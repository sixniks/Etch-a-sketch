//Create a grid with a fixed width
//Each piece of grid should resize to take available space



const goButton= document.querySelector("button")
const cont= document.querySelector(".container")
let userInput= document.querySelector("input")

let userInputNum=Number(userInput)

goButton.addEventListener("click",getInput)
function getInput(){
    cont.innerText=""
   let number=Number(userInput.value)
if(number>=7000){
    userInput.value=""
    return alert("ERROR please enter a number under 7000")
}
    userInput.value=""

    for(i=number; i>0; i--){
       
        let newBoxH=document.createElement("div")
        newBoxH.className="newBoxH"
        cont.appendChild(newBoxH)
         }
         let boxHover=document.querySelectorAll(".newBoxH")
         boxHover.forEach(element => {
            element.addEventListener("mouseenter", changeBackgroundColor );
            let intCount=0
            let opacity= 0
          
            function changeBackgroundColor(){
                
                intCount+=1
                console.log(intCount)
                
                
                
                
                element.style.opacity=opacity+=.10
                console.log(opacity)
                
                
                 element.style.backgroundColor="rgb("+Math.random()*255+","+Math.random()*255+", "+Math.random()*255+")"
                 
                //  console.log(opacity)
                }
            userInput.value=""
         });
         number=0
}






