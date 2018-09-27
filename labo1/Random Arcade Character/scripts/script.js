for (let i = 0; i < 25; i++) {
	let number = Math.random();
	if (number <= 0.5) {
		document.getElementById('block').innerHTML += '<div class="black"></div>'
	}else{
		document.getElementById('block').innerHTML += '<div class="white"></div>'

	}
};

let box = document.getElementById('block');
let copy = box.cloneNode('true');
document.getElementById('container').appendChild(copy);

