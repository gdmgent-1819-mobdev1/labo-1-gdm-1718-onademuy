let hoursPointer = document.getElementById('hoursPointer');
let minutesPointer = document.getElementById('minutesPointer');
let secondsPointer = document.getElementById('secondsPointer');

function clock(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let hoursSpin = (hours*30)+(0.5*minutes); 
	let minutesSpin = (minutes*6)+(0.1*seconds); 
	let secondsSpin = seconds*6; 

	hoursPointer.style.transform = 'rotate(' + hoursSpin + 'deg)';
	minutesPointer.style.transform = 'rotate(' + minutesSpin + 'deg)';
	secondsPointer.style.transform = 'rotate(' + secondsSpin + 'deg)';

	setTimeout(clock, 1000); 	
}

clock();