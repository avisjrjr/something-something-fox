const foxImg = document.querySelector('#fox')
const foxSays = new Audio("../audio/fox.mp3")

console.log(foxImg)

foxImg.addEventListener("click", function(evt){
  foxSays.volume = .05
  foxSays.play()
})


const notFoxImg = document.querySelector("#notFox")

notFoxImg.addEventListener("click", evt => {
  if (evt.target.id !== "notFox"){
    const audioElement = new Audio(`../audio/${evt.target.id}.mp3`)
    audioElement.volume = .05
    audioElement.play()
  }
})