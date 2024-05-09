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

let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}


