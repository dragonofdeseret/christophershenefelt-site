// build artwork gallery automatically

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



// random artwork

function randomArtwork() {

const art = artworks[Math.floor(Math.random() * artworks.length)];

window.location.href = art.page;

}



// build archive automatically

function buildArchive() {

const archive = document.querySelector(".archive-list");

if (!archive) return;

archive.innerHTML = "";

artworks.forEach(art => {

const li = document.createElement("li");

li.innerHTML = `${art.year} — <a href="${art.page}">${art.title}</a>`;

archive.appendChild(li);

});

}



buildGallery();
buildArchive();
