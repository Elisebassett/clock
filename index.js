
var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex_color');
var greeting = document.getElementById('greeting');

function hexClock() {
	var time = new Date();
	var hours = time.getHours() % 12;
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	if (hours <= 9) {
		hours = '0' + hours;
	}

	if (minutes <= 9) {
		minutes = '0' + minutes;
	}

	if (seconds <= 9) {
		seconds = '0' + seconds;
	}

	var hexColorStr = '#' + hours + minutes + seconds;
	var clockStr = hours + ":" + minutes + ":" + seconds;

	clock.textContent = clockStr;
	hexColor.textContent = hexColorStr; 

	document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);

function analogClock() {
	var time = new Date();
	var hours = time.getHours() % 12;
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	var hDeg = (hours * 30) + (0.5 * minutes);
	var mDeg = (minutes * 6) + (0.1 * seconds); 
	var sDeg = seconds * 6;

	hourHand.style.transform = 'rotate(' + hDeg + 'deg)';
	minuteHand.style.transform = 'rotate(' + mDeg + 'deg)';
	secondHand.style.transform = 'rotate(' + sDeg + 'deg)';

	setTimeout(analogClock, 1000);
}

analogClock();