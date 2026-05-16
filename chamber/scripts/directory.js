const container = document.querySelector("#members");

async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>${member.description}</p>
    `;

    container.appendChild(card);
  });
}

// View toggle
document.querySelector("#gridView").addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

document.querySelector("#listView").addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});

// Footer info
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

getMembers();