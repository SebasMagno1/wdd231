import { places } from "../data/discover.mjs";

const cards = document.querySelector("#discover-cards");

places.forEach(place => {

const card = document.createElement("section");

const title = document.createElement("h2");
title.textContent = place.name;

const figure = document.createElement("figure");

const img = document.createElement("img");
img.src = place.image;
img.alt = place.name;
img.loading = "lazy";
img.width = 300;
img.height = 200;

figure.appendChild(img);

const address = document.createElement("address");
address.textContent = place.address;

const description = document.createElement("p");
description.textContent = place.description;

const button = document.createElement("button");
button.textContent = "Learn More";

card.appendChild(title);
card.appendChild(figure);
card.appendChild(address);
card.appendChild(description);
card.appendChild(button);

cards.appendChild(card);

});

const visit = document.querySelector("#visitor-message");

const lastVisit = Number(localStorage.getItem("lastVisit"));

const now = Date.now();

if (!lastVisit){

visit.textContent = "Welcome! Let us know if you have any questions.";

}
else{

const days = Math.floor((now-lastVisit)/86400000);

if(days < 1){

visit.textContent = "Back so soon! Awesome!";

}
else if(days==1){

visit.textContent = "You last visited 1 day ago.";

}
else{

visit.textContent = `You last visited ${days} days ago.`;

}

}

localStorage.setItem("lastVisit",now);