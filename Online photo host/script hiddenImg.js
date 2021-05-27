let canvas = document.getElementById("displayer");
let c = canvas.getContext("2d");


let mouseX, mouseY;
let img = new Image;
let f = 1;

if (window.location.href.substring(0, 4) === "http") {
	img.src = decodeURIComponent(window.location.href.substring(90));
	let size = parseInt(window.location.href.substring(83, 85));
	if (window.location.href.substring(90) === "") {
		img.src = "../" + PhotoList[Math.floor(Math.random()*PhotoList.length)];
	}
} else {
	img.src = decodeURIComponent(window.location.href.substring(96));
	let size = parseInt(window.location.href.substring(89, 91));
	if (window.location.href.substring(96) === "") {
		img.src = "../" + PhotoList[Math.floor(Math.random()*PhotoList.length)];
	}
}

if (isNaN(size)) {
	size = 50;
}

function init() {

	for (a = 0;(img.height * f) > window.innerHeight;a++) {
		f = f - 0.001;
	}
	
	canvas.height = img.height * f;
	canvas.width = img.width * f;

	c.filter = "blur(100px) invert(100%)";
	c.drawImage(img,0,0,img.width * f, img.height * f);
	c.filter = "none";

	c.fillStyle = "white"
	for (a = 0;a < (img.height * f)/(size/2);a++) {
		c.fillRect(0,(size/2) * a,img.width * f,1)
	}
	for (a = 0;a < (img.width * f)/(size/2);a++) {
		c.fillRect((size/2) * a,0,1,img.height * f)
	}
	c.fillStyle = "black"
	for (a = 0;a < (img.height * f)/(size/2);a++) {
		c.fillRect(0,(size/2) * a -1,img.width * f,1)
	}
	for (a = 0;a < (img.width * f)/(size/2);a++) {
		c.fillRect((size/2) * a -1,0,1,img.height * f)
	}
	
	let getFormElement = document.getElementById("getSize");
	getFormElement.value = size;
	let getFormElement2 = document.getElementById("getURL");
	getFormElement2.value = img.src;
}

document.addEventListener("mousemove",render);
document.addEventListener("touchmove",renderTactile);

function renderTactile() {
	console.log(event.changedTouches[0].clientX)
	let X = Math.floor((event.changedTouches[0].clientX - canvas.offsetLeft + scrollX - 25) / (size/2)) * (size/2);
	let Y = Math.floor((event.changedTouches[0].clientY - canvas.offsetTop + scrollY - 25) / (size/2)) * (size/2);

	c.drawImage(img, X / f, Y / f, size / f, size / f, X, Y, size, size);
}

function render() {
		let X = Math.floor((event.clientX - canvas.offsetLeft + scrollX - 25) / (size/2)) * (size/2);
		let Y = Math.floor((event.clientY - canvas.offsetTop + scrollY - 25) / (size/2)) * (size/2);

		c.drawImage(img, X / f, Y / f, size / f, size / f, X, Y, size, size);
}

window.onload = init;
