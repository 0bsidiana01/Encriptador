function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
 
    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto encriptado con éxito";
        parrafo.textoContent = "";
        muñeco.src = "./img/Muñeco.svg";
    }

    else {
        muñeco.src = "./img/Muñeco.svg";
        tituloMensaje.textContent = "texto encriptado con éxito";
        parrafo.textContent = "Ingresa el texto que desesas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto desencriptado con éxito";
        parrafo.textoContent = "";
        muñeco.src = "./img/Muñeco.svg";
    }

    else {
        tituloMensaje.textContent = "texto encriptado con éxito";
        parrafo.textContent = "Ingresa el texto que desesas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}