// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

function agregarAmigo () {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === "") {
        asignarTextoElemento('#resultado', '⚠️ Por favor, ingresa un nombre válido.' );
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        asignarTextoElemento('#resultado', '⚠️ El nombre ya está en la lista.');
        return;
    }

    listaDeAmigos.push(nombre);
    actualizarLista();
    limpiarInput();
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    listaDeAmigos.forEach((nombre) => {
        let elemento = document.createElement('li');
        elemento.textContent = nombre;
        lista.appendChild(elemento);
    });
}

function limpiarInput() {
    document.getElementById('amigo').value = "";
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        asignarTextoElemento('#resultado', '⚠️ Agrega al menos un nombre antes de sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSecreto = listaDeAmigos[indiceAleatorio];

    asignarTextoElemento('#resultado', `🎉 El amigo secreto es: ${amigoSecreto} 🎁`);
}

function reiniciarJuego() {
    listaDeAmigos = [];
    actualizarLista();
    asignarTextoElemento('#resultado', '')
    limpiarInput();
}