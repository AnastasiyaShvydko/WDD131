const mainnav = document.querySelector(".navigation");
const humbutton = document.querySelector("#menu");

humbutton.addEventListener('click', ()=>{
    mainnav.classList.toggle('show');
    humbutton.classList.toggle('show');
})