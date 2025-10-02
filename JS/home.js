function generarLista(arraypokemones) {
    let listaHTML = "";
    for (let i = 0; i < arraypokemones.length; i++) {
        let id = arraypokemonesi.url.split("/")[6];
        listaHTML += `
        <div class="c-lista-pokemon poke-${id}" onclick="Detalle('${id}')">
            <p>#${id}</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" width="auto" height="60" loading="lazy" alt="${arraypokemones[i].name}">
            <p>${arraypokemones[i].name}</p>
        </div>`;
    }

    return listaHTML;
}


function buscadorfunction(cualquiercosa) {
    console.log(cualquiercosa);
}

function home() {
    document.getElementById("root").innerHTML = "home";

    // Buscador
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Pokémon...";
    buscador.addEventListener("input", () => {
        buscadorfunction(buscador.value);
    });

    document.getElementById("root").appendChild(buscador);

    // Contenedor filtro
    const tipos = [
        "normal", "fighting", "flying", "poison", "ground", "rock", "bug",
        "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice",
        "dragon", "dark", "fairy", "stellar", "unknown"
    ];

    const contenedorFiltro = document.createElement("section");
    contenedorFiltro.classList.add("tipos-container");

    for (let i = 0; i < tipos.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = tipos[i];

        // Agregar el evento click para filtrar por tipo
        btn.addEventListener("click", () => {
            FiltroConexion(tipos[i]);
        });

        // Agregar el botón al contenedor
        const listaHTML = generarLista(pokemones);
        contenedorFiltro.appendChild(btn);
        contenedorLista.innerHTML = listaHTML;
    }

    // Agregar el contenedor de filtro al root
    document.getElementById("root").appendChild(contenedorFiltro);
}
