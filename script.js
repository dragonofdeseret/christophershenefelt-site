const artworks = [

"art/painting-001.html",
"art/painting-002.html",
"art/zen-001.html"

];

function randomArtwork() {

const randomIndex = Math.floor(Math.random() * artworks.length);

window.location.href = artworks[randomIndex];

}
