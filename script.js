const artworks = [

"art/painting-001.html",
"art/painting-002.html",
"art/zen-001.html"

];

function randomArtwork() {

const randomIndex = Math.floor(Math.random() * artworks.length);

window.location.href = artworks[randomIndex];

}

function openFullscreen(img) {

let overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(0,0,0,0.95)";
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.zIndex = "1000";

let fullImage = document.createElement("img");

fullImage.src = img.src;

fullImage.style.maxWidth = "95%";
fullImage.style.maxHeight = "95%";
fullImage.style.boxShadow = "0 30px 60px rgba(0,0,0,0.8)";

overlay.appendChild(fullImage);

overlay.onclick = function () {
document.body.removeChild(overlay);
};

document.body.appendChild(overlay);

}
