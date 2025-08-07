

let amigos =[];

let contenedorAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado')


function agregarAmigo(){
    //Aqui obtenemos el valor de lo ingresado por el usuario
    
    nuevoAmigo = contenedorAmigo.value
    //Si se ingresa un nombre se anexa a la lista si no se genera la alerta
    if (nuevoAmigo){
        amigos.push(nuevoAmigo);
        contenedorAmigo.value = '';

        // Aqui se llama a la función que muestra la lista en la pagina

        mostrarListaAmigos();   
    }else{
        alert("Por favor, inserte un nombre.");
    }
    console.log(amigos)

}

function mostrarListaAmigos(){
    // se limpia la lista de amigos
    listaAmigos.innerHTML = '';

    //Se recorre el array amigos y se crea una etiqueta por cada uno
    amigos.forEach(amigo =>{
        let li = document.createElement('li');
        li.textContent = amigo;

        // Se agrega la nueva etiqueta a la lista <ul>
        listaAmigos.appendChild(li);
    })
}

function sortearAmigo(){
    let numeroDeAmigos = amigos.length;
    if(numeroDeAmigos > 0){
        let indiceAmigo = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indiceAmigo];
        console.log(indiceAmigo)
        listaAmigos.innerHTML = '';
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSeleccionado}`
    }else{
        alert("Primero debe ingresar los nombres de los amigos a sortear")
    }
}
    