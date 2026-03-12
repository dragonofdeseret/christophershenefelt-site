/* =========================
   BUILD ART PAGE GALLERY
========================= */

function buildGallery() {

const gallery = document.querySelector(".gallery");
if (!gallery) return;

gallery.innerHTML = "";

artworks.forEach(art => {

const link = document.createElement("a");
link.href = art.page;

const img = document.createElement("img");
img.src = art.image;
img.alt = art.title;

link.appendChild(img);
gallery.appendChild(link);

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
section.className = "timeline-year";

const heading = document.createElement("h2");
heading.textContent = year;

const grid = document.createElement("div");
grid.className = "gallery";

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
<p>© ${new Date().getFullYear()} Christopher Shenefelt</p>
<p class="footer-note">All artwork and writing © their respective years.</p>
`;

document.querySelector(".content").appendChild(footer);

}


/* =========================
   RUN EVERYTHING
========================= */

buildGallery();
buildArchive();
insertFooter();
