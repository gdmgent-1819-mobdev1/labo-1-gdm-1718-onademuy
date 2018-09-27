function clockbe(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let time = hours + ":" + minutes + ":" + seconds;
	document.getElementById("clockBelgium").innerHTML = time;

	setTimeout(clockbe, 1000);
};

function clockny(){
	let date = new Date();
	let hours = date.getHours() - 6;
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let time = hours + ":" + minutes + ":" + seconds;
	document.getElementById("clockNewYork").innerHTML = time;

	setTimeout(clockny, 1000);
};

clockbe();
clockny();