var dark = false

function theme() {
    event.preventDefault();
    var bottom = document.querySelector('.bottom');
    bottom.classList.toggle('darkBottom',!dark);
    var item = document.getElementsByClassName('item');
    item[0].classList.toggle('darkItem',!dark);
    item[1].classList.toggle('darkItem',!dark);
    item[2].classList.toggle('darkItem',!dark);
    var text1 = document.getElementsByTagName('h3');
    text1[0].classList.toggle('darkText1',!dark);
    text1[1].classList.toggle('darkText1',!dark);
    text1[2].classList.toggle('darkText1',!dark);
    var text2 = document.getElementsByTagName('p');
    text2[0].classList.toggle('darkText2',!dark);
    text2[1].classList.toggle('darkText2',!dark);
    text2[2].classList.toggle('darkText2',!dark);
    dark = !dark;
}