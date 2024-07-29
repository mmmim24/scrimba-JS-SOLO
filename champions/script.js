var endorse = document.getElementById("endorsements");

var message = [
    {
        from: "name1",
        text: "message",
        to : "name2"
    }
]


var from = document.getElementById("from")
var text = document.getElementById("text")
var to = document.getElementById("to")



function publish(){
    var d = document.createElement('div')
    d.classList.add('item')
    d.innerHTML= `<h4>To ${to.value}</h4>${text.value}<h4>From ${from.value}</h4>`;
    endorse.append(d);
    from.value = "";
    text.value = "";
    to.value = "";
    console.log(to.value)
}
