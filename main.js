const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(json => {
    console.log(json)
    const container = document.querySelector(".container-uno")
    let containerData = ""
    json.results.forEach(character => {
        const card = `
        <div class="character">
            <img src="${character.image}" alt="${character.name}">
            <div class="character_content">
                <h2>${character.name}</h2>
                <p>${character.species}</p>
                <a href="character.html?id=${character.id}">Ir al personaje</a>
            </div>
        </div>
        `
        containerData += card
    })
    container.innerHTML = containerData
})