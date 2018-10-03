let KeyAelement = document.getElementById("key-A")

let KeySelement =  document.getElementById("key-S")

let KeyDelement = document.getElementById("key-D")


let audioAelement = 
    document.getElementById("audio-A")

let audioSelement = 
    document.getElementById("audio-S")

let audioDelement = 
    document.getElementById("audio-D")


KeyAelement.onclick = () => {
    console.log("Clicked")
    audioAelement.play(audioAelement)
}


KeySelement.onclick = () => {
    console.log("Clicked")
    audioSelement.play(audioSelement)
}

KeyDelement.onclick = () => {
    console.log("Clicked")
    audioDelement.play(audioDelement)
}


