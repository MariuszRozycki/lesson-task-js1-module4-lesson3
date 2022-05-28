const select = document.querySelector("select");
const list = document.querySelector(".list");



select.addEventListener("change", function(event) {
  console.log(event.target.value);

  const quantity = event.target.value;

  list.innerHTML = "";

  for (let i = 1; i <= quantity; i++) {
    list.innerHTML += `<a class="item">${i}</a>`
  }
});


