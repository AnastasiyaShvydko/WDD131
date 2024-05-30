const mainnav = document.querySelector(".navigation");
const humbutton = document.querySelector("#menu");
const eventsLink = document.getElementById("events");
const contactsLink = document.getElementById("contacts");

humbutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('show');
    humbutton.classList.toggle('show');
})

eventsLink.addEventListener('click', ()=>{
    
})

