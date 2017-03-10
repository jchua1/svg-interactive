var pic = document.getElementById('vimage');
var m = document.getElementById('move');
var c = document.getElementById('clear');

var circle = function(x, y) {
    var state = 0
    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', x);
    c.setAttribute('cy', y);
    c.setAttribute('r', 15);
    c.setAttribute('fill', 'purple');
    c.setAttribute('stroke', 'black');
    c.setAttribute('xinc', 1);
    c.setAttribute('yinc', 1);
    c.addEventListener('click', change);
    pic.appendChild(c);
};

var change = function(e) {
    if (e.target.getAttribute('fill') == 'purple') {
	e.target.setAttribute('fill', 'green');
    }
    else {
	pic.removeChild(e.target);
	var x = Math.floor(Math.random() * (486 - 15) + 15);
	var y = Math.floor(Math.random() * (486 - 15) + 15);
	circle(x, y);
    };
    e.stopPropagation();
};

var create = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    circle(x, y, 1, 1);
};

var requestID;

var move = function() {
    window.cancelAnimationFrame(requestID);
    var circles = document.getElementsByTagName('circle');
    var draw = function() {
	for (i = 0; i < circles.length; i++) {
	    var c = circles[i];
	    var x = parseInt(c.getAttribute('cx'));
	    var y = parseInt(c.getAttribute('cy'));
	    var r = parseInt(c.getAttribute('r'));
	    var xinc = parseInt(c.getAttribute('xinc'));
	    var yinc = parseInt(c.getAttribute('yinc'));
	    c.setAttribute('cx', x + xinc);
	    c.setAttribute('cy', y + yinc);
	    if (x + r == 500)
		c.setAttribute('xinc', -1);
	    if (x - r == 0)
		c.setAttribute('xinc', 1);
	    if (y + r == 500)
		c.setAttribute('yinc', -1);
	    if (y - r == 0)
		c.setAttribute('yinc', 1);
	};
	requestID = window.requestAnimationFrame(draw);
    };
    draw();
};

var clear = function() {
    window.cancelAnimationFrame(requestID);
    while (pic.lastChild)
	pic.removeChild(pic.lastChild);
};

pic.addEventListener('click', create);
m.addEventListener('click', move);
c.addEventListener('click', clear);
