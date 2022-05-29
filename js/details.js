const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (id === null) {
  location.href = "/";
}

const url = "https://reakingbadapi.com/api/characters/" + id;
console.log(url);

const selected_id = document.querySelector(".id");
const details = document.querySelector(".details");

selected_id.innerHTML = id;

async function fetchCharacter() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data[0];
    console.log(result);
    createHtml(result);
  }
  catch(error) {
    console.error(error);
    details.innerHTML = error;
  }
}
fetchCharacter();

function createHtml(result) {
  details.innerHTML = `<h1>${result.name}</h1>
                      <h2>${result.occupation[0]}</h2>`
}

