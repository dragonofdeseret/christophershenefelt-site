// ------------------------------
// BUILD ART GALLERY
// ------------------------------

function buildGallery() {

const gallery = document.querySelector(".gallery");

if (!gallery || !window.artworks) return;

gallery.innerHTML = "";

artworks.forEach(art => {

const link = document.createElement("a");
link.href = art.page;

const img = document.createElement("img");
img.src = art.image;
img.alt = art.title;
img.loading = "lazy";

link.appendChild(img);
gallery.appendChild(link);

});

}


// ------------------------------
// RANDOM ARTWORK BUTTON
// ------------------------------

function randomArtwork() {

if (!window.artworks) return;

const art = artworks[Math.floor(Math.random() * artworks.length)];

window.location.href = art.page;

}

// -----------------------------
// AUTO FOOTER
// -----------------------------

function insertFooter() {

const footer = document.createElement("footer");
footer.className = "site-footer";

footer.innerHTML = `
<p>© ${new Date().getFullYear()} Christopher Shenefelt | The Dragon of Deseret</p>
<p class="footer-note">All artwork and writing © their respective years</p>
`;

document.querySelector(".content").appendChild(footer);

}

insertFooter();


// ------------------------------
// BUILD ARCHIVE
// ------------------------------

function buildArchive() {

const archive = document.querySelector(".archive-list");

if (!archive || !window.artworks) return;

archive.innerHTML = "";

artworks.forEach(art => {

const li = document.createElement("li");

li.innerHTML = `${art.year} — <a href="${art.page}">${art.title}</a>`;

archive.appendChild(li);

});

}


// ------------------------------
// RUN SCRIPTS WHEN PAGE LOADS
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {

buildGallery();
buildArchive();

});
