// btn 1

var btn1 = document.querySelector('.button1');

btn1.onmousemove = function(e) {
    var x = e.pageX - btn1.offsetLeft;
    var y = e.pageY - btn1.offsetTop;

    btn1.style.setProperty('--eixoX', x + 'px')
    btn1.style.setProperty('--eixoY', y + 'px')
}

// btn 2

var btn2 = document.querySelector('.button2');

btn2.onmousemove = function(e) {
    var x = e.pageX - btn2.offsetLeft;
    var y = e.pageY - btn2.offsetTop;

    btn2.style.setProperty('--eixoX', x + 'px')
    btn2.style.setProperty('--eixoY', y + 'px')
}

// btn 3

var btn3 = document.querySelector('.button3');

btn3.onmousemove = function(e) {
    var x = e.pageX - btn3.offsetLeft;
    var y = e.pageY - btn3.offsetTop;

    btn3.style.setProperty('--eixoX', x + 'px')
    btn3.style.setProperty('--eixoY', y + 'px')
}

// btn 4

var btn4 = document.querySelector('.button4');

btn4.onmousemove = function(e) {
    var x = e.pageX - btn4.offsetLeft;
    var y = e.pageY - btn4.offsetTop;

    btn4.style.setProperty('--eixoX', x + 'px')
    btn4.style.setProperty('--eixoY', y + 'px')
}