const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var dark = false;
var symbols = true;
var field0 = document.getElementsByClassName('field')[0];
var field1 = document.getElementsByClassName('field')[1];

function changeTheme(){
    event.preventDefault();
    var body = document.getElementsByTagName('body')[0];
    body.classList.toggle('darkBody',!dark);
    var main = document.getElementById('main');    
    main.classList.toggle('darkMain',!dark);
    var h11 = document.getElementsByTagName('h1')[0];
    h11.classList.toggle('darkH11',!dark);
    var h12 = document.getElementsByTagName('h1')[1];
    h12.classList.toggle('darkH12',!dark);
    var h21 = document.getElementsByTagName('h2')[0];
    h21.classList.toggle('darkH21',!dark);
    console.log(h11.innerHTML);
    console.log(h12.innerHTML);
    console.log(h21.innerHTML);
    dark = !dark;
}

function copy0(){
    if(field0.innerHTML == "") return;
    navigator.clipboard.writeText(field0.innerHTML);
    alert(`copied to clipboard`);
}
function copy1(){
    if(field0.innerHTML == "") return;
    navigator.clipboard.writeText(field1.innerHTML);
    alert(`copied to clipboard`);
}

function symbolsOff(){
    event.preventDefault();
    var toggle = document.getElementById('toggle');
    toggle.classList.toggle('off',symbols);
    symbols = !symbols;
    console.log(toggle.classList);
}

function generate(){
    event.preventDefault();
    var pass0 = "";
    var pass1 = "";
    var len =  document.getElementById('length').value;
    for(var i = 0; i < parseInt(len); i++){
        if(symbols){
            pass0 += characters[Math.floor(Math.random() * characters.length)];
            pass1 += characters[Math.floor(Math.random() * characters.length)];
        }
        else{
            pass0 += characters[Math.floor(Math.random() * 62)];
            pass1 += characters[Math.floor(Math.random() * 62)];
        }
    }
    field0.innerHTML = pass0;
    field1.innerHTML = pass1;
}