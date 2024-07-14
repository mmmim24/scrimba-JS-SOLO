var dark = false

function theme() {
    event.preventDefault();
    var bottom = document.querySelector('.bottom');
    bottom.classList.toggle('darkBottom',!dark);
    var item = document.getElementsByClassName('item');
    for(let i = 0;i<item.length;i++){
        item[i].classList.toggle('darkItem',!dark);
    }
    var text1 = document.getElementsByTagName('h3');
    for(let i = 0;i<item.length;i++){
        text1[i].classList.toggle('darkText1',!dark);
    }
    var text2 = document.getElementsByTagName('p');
    for(let i = 0;i<item.length;i++){
        text2[i].classList.toggle('darkText2',!dark);
    }
    dark = !dark;
}

function convert(){
    event.preventDefault();
    let num = document.getElementById('number').value;
    let inp = document.getElementsByClassName('inp');
    for(let i = 0;i<inp.length;i++){
        inp[i].textContent = num;
    }

    let foot = ((3.281 * num * 100)/100).toFixed(2);
    let meter = ((num / 3.281 * 100)/100).toFixed(2);
    let gallon = ((0.264 * num * 100)/100).toFixed(2);
    let liter = ((num / 0.264 * 100)/100).toFixed(2);
    let pound = ((2.204 * num * 100)/100).toFixed(2);
    let kilogram = ((num / 2.204 * 100)/100).toFixed(2);

    var out = [];
    out.push(foot,meter,gallon,liter,pound,kilogram);

    var values = document.getElementsByClassName('values');
    for(let i = 0;i<values.length;i++){
        values[i].textContent = out[i];
    }
}