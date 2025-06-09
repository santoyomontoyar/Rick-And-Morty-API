const searchParams = new URLSearchParams(window.location.search);
const page = searchParams.get("page") || 1;
const name = searchParams.get("name") || "";

let apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
if (name) {
  apiUrl += `&name=${name}`;
}

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Personaje no encontrado");
    }
    return response.json();
  })
  .then(json => {
    const containeruno = document.querySelector(".container-uno");
    const pagination = document.getElementById("pagination");

    let containerunoData = "";
    json.results.forEach(character => {
      const card = `
        <div class="character">
          <img src="${character.image}" alt="${character.name}">
          <div class="character_content">
            <h2>${character.name}</h2>
            <p>${character.species}</p>
            <a href="character.html?id=${character.id}">Ir al personaje</a>
          </div>
        </div>`;
      containerunoData += card;
    });
    containeruno.innerHTML = containerunoData;

    let pages = "";
    for (let i = 1; i <= json.info.pages; i++) {
      let link = `?page=${i}`;
      if (name) link += `&name=${name}`;
      pages += `<a href="${link}">${i}</a>`;
    }
    pagination.innerHTML = pages;
  })
  .catch(error => {
    document.querySelector(".container-uno").innerHTML = "<p>No se encontraron personajes.</p>";
    document.getElementById("pagination").innerHTML = "";
  });

const botonBuscar = document.getElementById("buscador");
if (botonBuscar) {
  botonBuscar.addEventListener("click", () => {
    const input = document.getElementById("name-filter").value.trim();
    window.location.href = `?name=${input}`;
  });
}