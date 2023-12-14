const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let chosenRating = "";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    chosenRating = e.target.nextElementSibling.innerText;
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
    <strong>Thanks for your response</strong><br>
    <strong>Your Feedback: ${chosenRating}</strong>
    <p>we will use your feedback to improve our services</p>
    `;
});

function removeActive() {
  for (let a = 0; a < ratings.length; a++) {
    ratings[a].classList.remove("active");
  }
}
