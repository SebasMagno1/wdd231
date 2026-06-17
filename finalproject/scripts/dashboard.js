import { savePreference, getPreference } from "./storage.js"; 
import { openModal, initializeModal } from "./modal.js"; 

const cards = document.querySelector("#cards"); 
const filter = document.querySelector("#filter"); 
const total = document.querySelector("#total"); 
const count = document.querySelector("#transactionCount"); 
const favorite = document.querySelector("#favorite"); 
let transactions = []; initializeModal(); 
async function loadTransactions() { 
    try { 
        const response = await fetch("data/transactions.json"); 
        if (!response.ok) { 
            throw new Error("JSON not found."); 
        } 
        transactions = await response.json(); 
        
        const saved = getPreference(); 
        if (saved) { 
            filter.value = saved; 
            displayTransactions(saved); 
        } else { 
            displayTransactions("all"); 
        } 
    } catch(error){ 
        cards.innerHTML=` <h2>Error loading data.</h2> `; 
        console.log(error); 
    } 
} 

function displayTransactions(category){ 
    cards.innerHTML=""; 
    let list=transactions; 
    if(category!="all"){ 
        list= transactions.filter( item=>item.category===category ); 
    } 
    const totalAmount= list.reduce( (sum,item)=>sum+item.amount, 0 ); 
    total.textContent= `$${totalAmount.toFixed(2)}`; 
    count.textContent= list.length; 
    favorite.textContent= category; 
    list.forEach(item=>{ 
        const card= document.createElement("section"); 
        card.classList.add("card"); 
        card.dataset.id=item.id; 
        card.innerHTML=` <h3>${item.category}</h3> 
        <p>Date: ${item.date}</p> <p>Amount: $${item.amount}</p> <p>${item.description}</p> <button class="details"> Details </button> `; 
        card.querySelector(".details") .addEventListener( "click", ()=>{ openModal(item); } ); 
        cards.appendChild(card); 
    }); 
} 

filter.addEventListener( "change", ()=>{ 
    savePreference( filter.value ); 
    displayTransactions( filter.value ); 
} ); 

loadTransactions();