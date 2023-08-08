
let passwordEl = document.getElementById('password-el');
let copyEl = document.getElementById('copy-el')

let chars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i",
            "j","k","l","m","n","o","p","q","r","s","t","u","v",
             "w","x","y","z","!","@","#","$","%","^","&","*","(",")",
             "A","B","C","D","E","F","G","H","I","J","K","L","M","N",
             "O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let passwordLength = 12;
let password = "";
let isEight = false

function generatePassword()
{
    for(let i = 1; i <= passwordLength; i++)
    {
        let randomPassword = Math.floor(Math.random()*chars.length)
        password += chars[randomPassword]
        passwordEl.value = password;
    }
    password = ""
}


function copyPassword() {
    let copyText = document.getElementById('password-el')
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(copyText.value);  
    alert("Copied the text: " + copyText.value);
  }