let imgList = document.querySelectorAll("img");

for (let a = 0; a < imgList.length; a++) {
	imgList[a].onclick = function() {let CB = navigator.clipboard.writeText(imgList[a].src);};
};