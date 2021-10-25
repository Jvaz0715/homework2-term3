let numStars = document.getElementById("num-stars");
let numStarsToNumber = Number(numStars.innerHTML);
const starsContainer = document.querySelector(".stars-container")


// "get" delete button and add event listener
const removeButton = document.getElementById('remove-one-star');

removeButton.addEventListener('click', function(event) {
   // console.log("Remove star button clicked")
   numStarsToNumber = Number(numStars.innerHTML);
   numStarsToNumber--;
   if(numStarsToNumber < 0) {
      numStarsToNumber = 0;
   }
   numStars.innerHTML = numStarsToNumber;
   starsContainer.removeChild(starsContainer.lastElementChild)
});

// get add button and add event listener

const addButton = document.getElementById("add-one-star");
addButton.addEventListener('click', function(event){
   // console.log("Add star button clicked")

   numStarsToNumber = Number(numStars.innerHTML);
   numStarsToNumber++;

   const img = document.createElement("img");
   img.src ="./star.png";
   numStars.innerHTML = numStarsToNumber;

   if (numStarsToNumber > 0) {
      for (let i = 0; i < numStarsToNumber; i++) {
         starsContainer.appendChild(img)
      }
   }
});

const clearAllButton = document.getElementById("clear-all");
clearAllButton.addEventListener('click', function(event){
   numStars.innerHTML = 0;
   starsContainer.innerHTML = "";
})
