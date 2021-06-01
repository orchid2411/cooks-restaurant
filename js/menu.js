
function BackTopPage() {
    setTimeout(() => {
        document.documentElement.scrollTop = 0;
    }, 0)
}

function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    console.log(a)
}

function myFunctionIcon() {
    var x = document.getElementById("menu-icon");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

var a = ''
function getImg() {
    var x = document.getElementById('test').getAttribute('src')
    
    a = x
    // y.src = x
    console.log(a)
}

function setImg() {
    var y = document.getElementById('test1')
    console.log(a)
    // y.src = a
}