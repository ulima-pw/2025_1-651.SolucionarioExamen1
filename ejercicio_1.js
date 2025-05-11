
const agregar = ()=> {
    console.log("agregando...")
    const lista = document.getElementById("id_lista")
    const nuevoElemento = document.createElement("li")
    const inputText = document.getElementById("id_input")
    nuevoElemento.innerHTML = inputText.value
    lista.appendChild(nuevoElemento)
    
}

const ocultar = ()=> {
   
    var lista = document.getElementById("id_lista")
   
    if (lista.style.display == "block") {
        lista.style.display = "none"
        
    } else {
        lista.style.display = "block"
        
    }
}

const main = ()=> {
    console.log("se ejecuto el main")
    const botonAgregar = document.getElementById("id_agregar")
    const botonMenu = document.getElementById("id_menu")
    console.log(botonAgregar)
    botonAgregar.addEventListener("click",agregar)
    botonMenu.addEventListener("click", ocultar)

}

main()