let inputElement = document.getElementById('favchap');
let buttonElement = document.querySelector('button');
let listElement = document.getElementById('list');


buttonElement.addEventListener('click', ()=>{
    let liElement = document.createElement('li');
    liElement.innerHTML = inputElement.value;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "❌";
    liElement.appendChild(deleteButton);
    listElement.appendChild(liElement);
    deleteButton.addEventListener('click', ()=>{
    
    listElement.removeChild(liElement);
    })
})


