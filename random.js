const works = [

"art/glow-landscape.html",

"writing.html",
"archive.html"

];

function randomPage() {

const randomIndex = Math.floor(Math.random() * works.length);

window.location.href = works[randomIndex];

}
