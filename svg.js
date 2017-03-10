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
    c.addEventListener('click', function(e, state) {
	if (state == 0) {
	    c.setAttribute('fill', 'green');
	    state++;
	})
    pic.appendChild(c);
};

var change = function(e) {
    if (state == 0) {
	c.setAttribute('fill', 'green');
	state++;
    }
    else
	pic.removeChild(e.target);
};

var create = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    circle(x, y);
};

pic.addEventListener('click', create);
