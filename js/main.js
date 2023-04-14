const topBar = document.querySelector(".topbar");

// Cambiar opacidad con scroll
window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        topBar.classList.add("transparent")
    }
    else {
        topBar.classList.remove("transparent")
    }
})

// Nueva variable para almacenar altura del Topbar
let topbarHeight = topBar.offsetHeight;
// Añadimos un padding-top basado en la altura al main-content o el contenido principal 
const mainContent = document.querySelector(".main-content");
mainContent.style.paddingTop = `${topbarHeight + 20}px`;

// BOTON PLAY EN LA IMAGEN
const containerConcentracion = document.querySelectorAll(".card-concentracion");
const containerSpotifyPlaylists = document.querySelectorAll(".card-spotify-playlists");

//Funcion que se va a repetir
const createButton = card => {
    //Crear el boton
    const button = document.createElement("button");
    button.innerHTML = '<i class="fa-solid fa-play"></i>';

    //Agregar el boton al elemento hijo
    card.appendChild(button);

    //Ocultar el boton inicialmente
    button.style.display = "none";
    button.classList.add("btn-play");

    //Agregamos un evento de hover a este elemento (se necesita cuando el mouse entra y cuando sale)
    card.addEventListener("mouseover", () => {
        button.style.display = 'block';
    })

    card.addEventListener("mouseout", () => {
        button.style.display = "none";
    })
}

//Usamos la funcion en las 2 filas de contenedores
containerConcentracion.forEach(card => {
    createButton(card)
})

containerSpotifyPlaylists.forEach(card => {
    createButton(card)
})