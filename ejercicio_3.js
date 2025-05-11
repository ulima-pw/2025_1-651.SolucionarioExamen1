const validar = ()=> {
    console.log("validando...")
    const inputNombre = document.getElementById("id_nombre")
    const inputEdad = document.getElementById("id_edad")
    const mensaje = document.getElementById("id_texto_mensaje")

    if (inputNombre.value == "" || inputEdad.value == "") {
        mensaje.setAttribute("class", "alert alert-danger mt-2")
        mensaje.innerText = "Error, debe llenar todos los campos"
        return
    } 
    mensaje.setAttribute("class", "alert alert-success mt-2")
        mensaje.innerText = "Se guardo con exito"

}



const main = ()=> {
    console.log("se ejecuto el main")
    const botonGuardar = document.getElementById("id_guardar")
    botonGuardar.addEventListener("click", validar)
}

main()