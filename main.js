const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);

const pageUrl = searchParams.get("page");

let paramsPagination = "";
if (pageUrl !== 1 || pageUrl !== null) {
    paramsPagination = `?page=${pageUrl}`;
}


fetch("https://rickandmortyapi.com/api/character" + paramsPagination)
.then(response => response.json())
.then(json => {
    console.log(json)
    const container = document.querySelector(".container-uno")
    
    const pagination = document.querySelector("#pagination")
    
    let pages = ""
    for (let pageIndex = 1; pageIndex <= json.info.pages; pageIndex++) {
        const page = `<a href="?page=${pageIndex}">${pageIndex}</a>`      
        pages += page
    }
    pagination.innerHTML = pages

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