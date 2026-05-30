const spotlightContainer =
document.querySelector("#spotlight-container");

async function loadSpotlights() {

    const response =
    await fetch("data/members.json");

    const data =
    await response.json();

    const premiumMembers =
    data.members.filter(member =>
        member.membership === "Gold" ||
        member.membership === "Silver"
    );

    const shuffled =
    premiumMembers.sort(() => 0.5 - Math.random());

    const selected =
    shuffled.slice(0,3);

    selected.forEach(member => {

        const card =
        document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="${member.image}"
                 alt="${member.name} logo"
                 loading="lazy">

            <p>${member.phone}</p>

            <p>${member.address}</p>

            <a href="${member.website}" target="_blank">
                Website
            </a>

            <p>${member.membership} Member</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

loadSpotlights();