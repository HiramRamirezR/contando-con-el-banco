let numeroActual = 0;
const contenedorImagenes = document.getElementById("contenedor-imagenes");

function generarNumeroAleatorio() {
  contenedorImagenes.innerHTML = "";
  let aleatorio = Math.floor(Math.random() * 9) + 1;

  if (aleatorio <= 2) {
    // Número aleatorio del 1 al 20
    numeroActual = Math.floor(Math.random() * 20) + 1;
  } else {
    // Número aleatorio del 30 al 100 en decenas
    numeroActual = Math.floor(Math.random() * 8 + 3) * 10;
  }

  function mostrarNumero(numero) {

    if (numero < 10) {
      // Número de una sola cifra
      console.log(numero);
      for (let i = 0; i < numero; i++) {
        let unidad = document.createElement("img")
        unidad.src = `/img/unidad.png`;
        contenedorImagenes.appendChild(unidad);
      }
    } else if (numero > 10 && numero < 20) {
      // Número del 11 al 19
      console.log(numero);
      for (let i = 1; i < numero / 10; i++) {
        let decena = document.createElement("img")
        decena.src = `/img/decena.png`;
        contenedorImagenes.appendChild(decena);
      }
      for (let i = 0; i < numero % 10; i++) {
        let unidad = document.createElement("img")
        unidad.src = `/img/unidad.png`;
        contenedorImagenes.appendChild(unidad);
      }
    } else if (numero < 100) {
      // Número de dos cifras
      console.log(numero);
      for (let i = 0; i < numero / 10; i++) {
        let decena = document.createElement("img")
        decena.src = `/img/decena.png`;
        contenedorImagenes.appendChild(decena);
      }
    } else {
      // Número de tres cifras
      console.log(numero);
      let centena = document.createElement("img")
      centena.src = `/img/centena.png`;
      contenedorImagenes.appendChild(centena);
    }
  }

  mostrarNumero(numeroActual);


  document.getElementById("mensaje").textContent = "";
  document.getElementById("input-respuesta").value = "";
}

function verificarRespuesta() {
  const respuesta = parseInt(document.getElementById("input-respuesta").value);

  if (respuesta === numeroActual) {
    document.getElementById("mensaje").textContent = "¡Correcto!";
  } else {
    document.getElementById("mensaje").textContent = "Intenta de nuevo.";
  }
}

document.getElementById("boton-generar").addEventListener("click", generarNumeroAleatorio);
document.getElementById("boton-adivinar").addEventListener("click", verificarRespuesta);

generarNumeroAleatorio();
