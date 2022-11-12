const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let output1El = document.getElementById("output1")
let output2El = document.getElementById("output2")

function generatePassword(){
    output1El.textContent = newPassword()
    output2El.textContent = newPassword()
}

function newPassword(){
    let password = ""
    for (let i = 0; i<9; i++){
        randomNumber = Math.floor(Math.random()*characters.length) + 1
        password += characters[randomNumber]
    }
    return password
}