/* =========================
   BUILD ART PAGE GALLERY
========================= */

function buildGallery() {

const gallery = document.querySelector(".gallery");
if (!gallery) return;

gallery.innerHTML = "";

const years = {};

artworks.forEach(art => {
if (!years[art.year]) {
years[art.year] = [];
}
years[art.year].push(art);
});

Object.keys(years)
.sort((a,b) => b - a)
.forEach(year => {

const section = document.createElement("div");
section.className = "gallery-year";

const heading = document.createElement("h2");
heading.textContent = year;

const grid = document.createElement("div");
grid.className = "gallery-grid";

years[year].forEach(art => {

const link = document.createElement("a");
link.href = art.page;

const img = document.createElement("img");
img.src = art.image;
img.alt = art.title;

link.appendChild(img);
grid.appendChild(link);

});

section.appendChild(heading);
section.appendChild(grid);
gallery.appendChild(section);

});

}

/* =========================
   IMAGE VIEWER
========================= */

document.addEventListener("click", e => {

if (e.target.matches(".series-gallery img, .art-image img")) {

const viewer = document.createElement("div");

viewer.className = "image-viewer";

viewer.innerHTML = `<img src="${e.target.src}">`;

viewer.onclick = () => viewer.remove();

document.body.appendChild(viewer);

}

});

}

/* =========================
   BUILD ARCHIVE PAGE
========================= */

function buildArchive() {

const archive = document.querySelector("#archive");
if (!archive) return;

archive.innerHTML = "";

const years = {};

artworks.forEach(art => {

if (!years[art.year]) {
years[art.year] = [];
}

years[art.year].push(art);

});

Object.keys(years)
.sort((a,b) => b - a)
.forEach(year => {

const section = document.createElement("div");
section.className = "archive-year";

const heading = document.createElement("h2");
heading.textContent = year;

const list = document.createElement("div");
list.className = "archive-list";

years[year].forEach(art => {

const row = document.createElement("a");
row.className = "archive-row";
row.href = art.page;

row.innerHTML = `
<span class="archive-title">${art.title.replace(", " + art.year, "")}</span>
<img src="${art.image}" alt="${art.title}">
`;

list.appendChild(row);

});

section.appendChild(heading);
section.appendChild(list);
archive.appendChild(section);

});

}

/* =========================
   RANDOM ARTWORK BUTTON
========================= */

function randomArtwork() {

const random = artworks[Math.floor(Math.random() * artworks.length)];
window.location.href = random.page;

}


/* =========================
   AUTO FOOTER
========================= */

function insertFooter() {

const footer = document.createElement("footer");

footer.className = "site-footer";

footer.innerHTML = `
<p>© ${new Date().getFullYear()} Christopher Shenefelt | The Dragon of Deseret</p>
<p class="footer-note">All artwork and writing © their respective years</p>
`;

document.querySelector("main").appendChild(footer);

}

/* =========================
   RUN EVERYTHING
========================= */

document.addEventListener("DOMContentLoaded", () => {
  buildGallery();
  buildArchive();
  insertFooter();
});
