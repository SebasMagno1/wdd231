const menuButton = document.querySelector("#menu"); 
const navigation = document.querySelector(".navigation"); 
if(menuButton){ 
    menuButton.addEventListener("click",()=>{ navigation.classList.toggle("open"); }); 
} 
const year = new Date().getFullYear(); const footer = document.querySelector("footer"); 
if(footer){ 
    footer.innerHTML += `<p>Current Year: ${year}</p>`; 
}