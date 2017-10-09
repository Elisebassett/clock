
var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex_color');

function hexClock() {
	var time = new Date();
	var hours = time.getHours() % 12;
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	if (hours.length < 2) {
		hours = "0" + hours;
	}

	if (minutes.length < 2) {
		minutes = "0" + minutes;
	}

	if (seconds.length < 2) {
		seconds = "0" + seconds;
	}

	var hexColorStr = '#' + hours + minutes + seconds;
	var clockStr = hours + ":" + minutes + ":" + seconds;

	clock.textContent = clockStr;
	hexColor.textContent = hexColorStr; 

	document.body.style.backgroundColor = hexColorStr;

}

hexClock();
setInterval(hexClock, 1000);