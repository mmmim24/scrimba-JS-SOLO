var homeScore = document.getElementById('home');
var guestScore = document.getElementById('guest');
if(localStorage.getItem('home') && localStorage.getItem('guest')){
    homeScore.innerHTML = localStorage.getItem('home');
    guestScore.innerHTML = localStorage.getItem('guest');
}
else{
    homeScore.innerHTML = guestScore.innerHTML = 0;
    localStorage.setItem('home',0);
    localStorage.setItem('guest',0);
}

function addPoints(team,num){
    var score = document.getElementById(team);
    score.innerHTML = parseInt(score.innerHTML) + num;
    localStorage.setItem(team,score.innerHTML);
    lead()
}
function reset(){
    homeScore.innerHTML = guestScore.innerHTML = 0;
    localStorage.removeItem('home');
    localStorage.removeItem('guest');
    lead()
}

function lead(){
    homeScore.classList.toggle('lead',parseInt(homeScore.innerHTML)>parseInt(guestScore.innerHTML));
    guestScore.classList.toggle('lead',parseInt(homeScore.innerHTML)<parseInt(guestScore.innerHTML));
}
lead()