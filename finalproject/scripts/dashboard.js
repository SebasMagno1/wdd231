import { savePreference, getPreference } from "./storage.js";
import { openModal, initializeModal } from "./modal.js";

const cards = document.querySelector("#cards");
const filter = document.querySelector("#filter");

let transactions = [];

initializeModal();

async function loadTransactions() {

    try {

        const response = await fetch("data/transactions.json");

        if (!response.ok) {
            throw new Error("Unable to load transaction data.");
        }

        transactions = await response.json();

        const savedCategory = getPreference();

        if (savedCategory) {
            filter.value = savedCategory;
            displayTransactions(savedCategory);
        } else {
            displayTransactions("all");
        }

    }

    catch (error) {

        cards.innerHTML =
        `<p>Error loading transactions.</p>`;

        console.error(error);

    }

}

function displayTransactions(category) {

    cards.innerHTML = "";

    let list = transactions;

    if (category !== "all") {

        list = transactions.filter(
            item => item.category === category
        );

    }

    list.forEach(item => {

        const card = document.createElement("section");

        card.classList.add("card");

        card.innerHTML = `

        <h3>${item.category}</h3>

        <p><strong>Date:</strong> ${item.date}</p>

        <p><strong>Amount:</strong> $${item.amount}</p>

        <p>${item.description}</p>

        <button class="details">
        Details
        </button>

        `;

        card.querySelector(".details")
        .addEventListener("click", () => {

            openModal(item);

        });

        cards.appendChild(card);

    });

}

filter.addEventListener("change", () => {

    savePreference(filter.value);

    displayTransactions(filter.value);

});

loadTransactions();