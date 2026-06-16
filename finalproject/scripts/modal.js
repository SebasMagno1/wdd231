const modal = document.querySelector("#transactionModal"); 
const title = document.querySelector("#modalTitle"); 
const date = document.querySelector("#modalDate"); 
const amount = document.querySelector("#modalAmount"); 
const description = document.querySelector("#modalDescription"); 
const closeButton = document.querySelector("#closeModal"); 

export function initializeModal() { 
    if (closeButton) { 
        closeButton.addEventListener( "click", () => { modal.close(); } ); 
    } 
} 

export function openModal(transaction) { 
    title.textContent = transaction.category; 
    date.textContent = `Date: ${transaction.date}`; 
    amount.textContent = `Amount: $${transaction.amount}`; 
    description.textContent = transaction.description; modal.showModal(); 
}