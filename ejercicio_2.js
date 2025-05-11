
const sumar = ()=> {
    console.log("sumando")
    const input1 = document.getElementById("id_input1")
    const input2 = document.getElementById("id_input2")
    const inputResultado = document.getElementById("id_resultado")
    const resultado = parseInt(input1.value)+ parseInt(input2.value)
    inputResultado.value = resultado
    
}

const restar = ()=> {
    console.log("restando")
    const input1 = document.getElementById("id_input1")
    const input2 = document.getElementById("id_input2")
    const inputResultado = document.getElementById("id_resultado")
    const resultado = parseInt(input1.value)- parseInt(input2.value)
    inputResultado.value = resultado
}
const multiplicar = ()=> {
    console.log("multiplicando")
    const input1 = document.getElementById("id_input1")
    const input2 = document.getElementById("id_input2")
    const inputResultado = document.getElementById("id_resultado")
    const resultado = parseInt(input1.value) * parseInt(input2.value)
    inputResultado.value = resultado
}
const dividir = ()=> {
    console.log("dividiendo")
    const input1 = document.getElementById("id_input1")
    const input2 = document.getElementById("id_input2")
    const inputResultado = document.getElementById("id_resultado")
    const resultado = parseInt(input1.value) / parseInt(input2.value)
    inputResultado.value = resultado
}


const main = ()=> {
    console.log("ejecutando el main")
    const botonSumar = document.getElementById("id_sumar")
    botonSumar.addEventListener("click", sumar)

    const botonRestar = document.getElementById("id_restar")
    botonRestar.addEventListener("click", restar)

    const botonMultiplicar = document.getElementById("id_multiplicar")
    botonMultiplicar.addEventListener("click", multiplicar)

    const botonDividir = document.getElementById("id_dividir")
    botonDividir.addEventListener("click", dividir)

}

main()