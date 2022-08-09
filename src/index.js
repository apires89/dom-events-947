
const list = document.getElementById("players");

// console.log(list);

list.insertAdjacentHTML("beforeend", "<li>Messi</li>");

const countriesList = document.querySelectorAll("#fifa-wins li");

countriesList.forEach((item) => {
  // console.log(item.innerText);
});

countriesList[2].insertAdjacentHTML("beforebegin", "<li>France(2 wins)</li>");

const countries = document.querySelector("#fifa-wins");
countries.insertAdjacentHTML("beforeend", "<li>France(2 wins)</li>");


const boris = document.getElementById('user');

// console.log(boris.dataset.uid);
// console.log(boris.dataset.githubNickname);


// target one image
// const romain = document.getElementById("romain");

// romain.addEventListener("click", (event) => {
//   // console.log(event);
//   // console.log(event.currentTarget);
//   event.currentTarget.classList.toggle("img-circle");
// });

// target several images
console.log(document.querySelectorAll("img"));
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("img-circle");
  });
});
