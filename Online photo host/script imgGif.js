let container = document.getElementById("imgGif");

let r = Math.floor(Math.random()*PhotoList.length);
container.innerHTML = "<img id=\"imgGifContent\" src=\"../" + PhotoList[r] + "\"/>";

function clickGif() {
r++;
if (r == PhotoList.length) {
r = 0;
}
container.innerHTML = "<img id=\"imgGifContent\" src=\"../" + PhotoList[r] + "\"/>";
}

const i = setInterval(clickGif, 10000);