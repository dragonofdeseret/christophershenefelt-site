const pages = [

"art.html",
"writing.html",
"archive.html",
"bio.html"

];

function randomPage() {

const randomIndex = Math.floor(Math.random() * pages.length);

window.location.href = pages[randomIndex];

}
