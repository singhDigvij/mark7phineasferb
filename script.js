const textInput =  document.querySelector(".input")
const button = document.querySelector(".btn-translate")
const output = document.querySelector(".output")

const apiURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function completeURL(input){
 return   apiURL +"?"+ "text=" + input
}

function eventHandler(){

fetch(completeURL(textInput.value))
.then((response)=>{return response.json()})
.then((data)=>{output.innerHTML= data.contents.translated})
}

button.addEventListener("click", eventHandler)