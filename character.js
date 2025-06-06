const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const id = searchParams.get("id");

fetch("https://rickandmortyapi.com/api/character/" + id)
.then(response => response.json())
.then(json => {
console.log(json)
    const container = document.querySelector(".container")
    const title = document.querySelector("#title")
    const characterImage = document.querySelector("#character--image")
    title.innerText = json.name
    characterImage.setAttribute("src", json.image)
        const card = `       
        <div class="character character--info">
                <h2>genero: ${json.gender}</h2>
                <h3>status: ${json.status}</h3>
                <h4>ubicacion: ${json.location.name}</h4>
                <h4>origen: ${json.origin.name}</h4>
                <p>especie: ${json.species}</p>
                <a href="index.html">Ir al inicio</a>
            </div>
        </div>
        `

    container.innerHTML = card
})