const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });

}

const footer = document.querySelector("footer");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML += `
    <p>Current Year: ${year}</p>
    `;

}