let container = document.getElementById("imgGif");
let NameContainer = document.getElementById("imgNameDisplayer");
let r = Math.floor(Math.random()*PhotoList.length);
container.innerHTML = "<img id=\"imgGifContent\" src=\"../" + PhotoList[r] + "\"/>";
NameContainer.innerText = PhotoList[r];
let onPause = false;

function clickGif() {
r++;
if (r == PhotoList.length) {
r = 0;
}
container.innerHTML = "<img id=\"imgGifContent\" src=\"../" + PhotoList[r] + "\"/>";
NameContainer.innerText = PhotoList[r];
}

function goBack() {
r--;
if (r == 0) {
r = PhotoList.length;
}
container.innerHTML = "<img id=\"imgGifContent\" src=\"../" + PhotoList[r] + "\"/>";
NameContainer.innerText = PhotoList[r];
}

function pauseResumeGif() {
	if (onPause === false) {
		clearInterval(i);
		onPause = true;
	} else {
		i = setInterval(clickGif, 10000);
		onPause = false;
	}
}
let i = setInterval(clickGif, 10000);