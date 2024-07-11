const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var field0 = document.getElementsByClassName('field')[0];
var field1 = document.getElementsByClassName('field')[1];

function changeTheme(){
    var element = document.getElementsByClassName('container')[0];  
    element.classList.toggle('dark');
}

function copy0(){
    navigator.clipboard.writeText(field0.innerHTML);
    alert(`Password ${field0.innerHTML} copied to clipboard`);
}
function copy1(){
    navigator.clipboard.writeText(field1.innerHTML);
    alert(`Password ${field1.innerHTML} copied to clipboard`);
}

function generate(){
    event.preventDefault();
    var pass0 = "";
    var pass1 = "";
    var len =  document.getElementById('length').value;
    for(var i = 0; i < parseInt(len); i++){
        pass0 += characters[Math.floor(Math.random() * characters.length)];
        pass1 += characters[Math.floor(Math.random() * characters.length)];
    }
    field0.innerHTML = pass0;
    field1.innerHTML = pass1;
}